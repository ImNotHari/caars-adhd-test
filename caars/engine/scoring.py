"""
Scoring and Evaluation Engine for CAARS assessment.
Computes raw scores across all subscales, Inconsistency Index, and standardized T-scores.
"""

import json
from pathlib import Path
from typing import Dict, Any, List, Optional

from caars.config import (
    SUBSCALE_NAMES,
    classify_t_score,
    INCONSISTENCY_FLAG_THRESHOLD
)
from caars.engine.norms import NormsEngine

QUESTIONS_PATH = Path(__file__).resolve().parent.parent / "data" / "questions.json"

class ScoringEngine:
    def __init__(self, questions_path: Optional[str | Path] = None,
                 norms_engine: Optional[NormsEngine] = None):
        path = Path(questions_path) if questions_path else QUESTIONS_PATH
        with open(path, "r", encoding="utf-8") as f:
            self.data = json.load(f)

        self.questions = {q["id"]: q for q in self.data["questions"]}
        self.inconsistency_pairs = self.data["inconsistency_pairs"]
        self.norms = norms_engine if norms_engine is not None else NormsEngine()

    def get_questions_list(self) -> List[Dict[str, Any]]:
        return list(self.questions.values())

    def calculate_inconsistency_index(self, responses: Dict[int, int]) -> int:
        """
        Calculate Inconsistency Index: sum of absolute differences between paired items.
        If any pair item is missing, default score difference is treated as 0 for that pair.
        """
        total_diff = 0
        for q1_id, q2_id in self.inconsistency_pairs:
            s1 = responses.get(q1_id, 0)
            s2 = responses.get(q2_id, 0)
            total_diff += abs(s1 - s2)
        return total_diff

    def calculate_raw_scores(self, responses: Dict[int, int]) -> Dict[str, int]:
        """
        Sum responses by scale.
        Scales:
          A: Inattention/Memory
          B: Hyperactivity/Restlessness
          C: Impulsivity/Emotional Lability
          D: Problems with Self-Concept
          E: DSM Inattentive Symptoms
          F: DSM Hyperactive-Impulsive Symptoms
          G: Total ADHD Symptoms (Scale E + Scale F)
          H: ADHD Index (12 discriminative items)
        """
        raw_scores: Dict[str, int] = {k: 0 for k in ["A", "B", "C", "D", "E", "F", "H"]}

        for q_id, score in responses.items():
            question = self.questions.get(q_id)
            if not question:
                continue
            val = max(0, min(3, int(score)))
            for scale in question["scales"]:
                if scale in raw_scores:
                    raw_scores[scale] += val

        # Scale G is defined as Scale E + Scale F
        raw_scores["G"] = raw_scores["E"] + raw_scores["F"]

        return raw_scores

    def evaluate_assessment(self, responses: Dict[int, int], form_type: str,
                            gender: str, age_bracket: str) -> Dict[str, Any]:
        """
        Comprehensive assessment evaluation:
        1. Inconsistency score & validity flag
        2. Raw scores across all scales
        3. T-Scores, percentiles, and clinical classifications
        """
        inconsistency_score = self.calculate_inconsistency_index(responses)
        inconsistency_flag = inconsistency_score >= INCONSISTENCY_FLAG_THRESHOLD

        raw_scores = self.calculate_raw_scores(responses)

        scale_results = []
        for code in ["A", "B", "C", "D", "E", "F", "G", "H"]:
            raw = raw_scores[code]
            t_score, pct = self.norms.lookup(
                form=form_type,
                gender=gender,
                age_bracket=age_bracket,
                scale_code=code,
                raw_score=raw
            )
            classification, desc = classify_t_score(t_score)

            scale_results.append({
                "scale_code": code,
                "scale_name": SUBSCALE_NAMES[code],
                "raw_score": raw,
                "t_score": t_score,
                "percentile": pct,
                "classification": classification,
                "classification_desc": desc
            })

        # Count total answered
        answered_count = sum(1 for q_id in self.questions if q_id in responses)

        return {
            "form_type": form_type,
            "gender": gender,
            "age_bracket": age_bracket,
            "items_answered": answered_count,
            "total_items": len(self.questions),
            "inconsistency_score": inconsistency_score,
            "inconsistency_flag": inconsistency_flag,
            "inconsistency_warning": (
                "High response inconsistency detected (Score >= 8). Protocol may reflect careless or erratic responding."
                if inconsistency_flag else "Protocol valid (acceptable consistency across response pairs)."
            ),
            "scores": scale_results
        }
