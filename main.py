"""
CAARS Standalone System Entrypoint (Phase 1 CLI Demonstration)
"""

import sys
from datetime import date
from caars.engine.scoring import ScoringEngine
from caars.engine.norms import NormsEngine
from caars.database.db import DatabaseManager

def demo():
    print("=" * 60)
    print("  CAARS Offline Assessment & Scoring System (Phase 1)")
    print("=" * 60)

    db = DatabaseManager()
    engine = ScoringEngine()

    print("\n1. Initializing Local Database: caars.db ... OK")

    # Sample demo patient
    mrn = "DEMO-001"
    existing = db.get_patient_by_mrn(mrn)
    if not existing:
        p_id = db.create_patient(
            mrn=mrn,
            first_name="Alex",
            last_name="Taylor",
            dob="1995-06-15",
            gender="Male",
            notes="Initial assessment for adult ADHD screening."
        )
        print(f"2. Created Demo Patient: Alex Taylor (MRN: {mrn}, ID: {p_id})")
    else:
        p_id = existing["id"]
        print(f"2. Loaded Existing Patient: Alex Taylor (ID: {p_id})")

    # Age bracket
    age_bracket = NormsEngine.get_age_bracket("1995-06-15")
    print(f"   Demographic Norm Cohort: Male, Age bracket: {age_bracket}")

    # Generate a realistic elevated profile response (elevated inattention, moderate hyperactivity)
    sample_responses = {}
    for q in engine.get_questions_list():
        qid = q["id"]
        scales = q["scales"]
        if "A" in scales or "H" in scales or "E" in scales:
            sample_responses[qid] = 2 if qid % 2 == 0 else 3
        elif "B" in scales or "F" in scales:
            sample_responses[qid] = 1 if qid % 2 == 0 else 2
        else:
            sample_responses[qid] = 1

    # Evaluate
    result = engine.evaluate_assessment(
        responses=sample_responses,
        form_type="self",
        gender="Male",
        age_bracket=age_bracket
    )

    print("\n3. Psychometric Evaluation Results:")
    print(f"   Inconsistency Index: {result['inconsistency_score']} | Flagged: {result['inconsistency_flag']}")
    print(f"   Validity Note: {result['inconsistency_warning']}")
    print("\n   Subscale Scores:")
    print(f"   {'Scale':<6} {'Name':<35} {'Raw':<6} {'T-Score':<9} {'Percentile':<12} {'Classification'}")
    print("   " + "-" * 85)

    for s in result["scores"]:
        print(f"   {s['scale_code']:<6} {s['scale_name']:<35} {s['raw_score']:<6} {s['t_score']:<9} {s['percentile']:<12.1f} {s['classification']}")

    # Save assessment into DB
    ass_id = db.create_assessment(
        patient_id=p_id,
        form_type="self",
        rater_name="Alex Taylor",
        administered_date=str(date.today()),
        relationship="Self"
    )
    db.save_responses(ass_id, sample_responses)
    db.save_scores(
        assessment_id=ass_id,
        inconsistency_score=result["inconsistency_score"],
        inconsistency_flag=result["inconsistency_flag"],
        scores=result["scores"]
    )
    print(f"\n4. Assessment persisted to local SQLite database (Assessment ID: {ass_id})")
    print("=" * 60)
    print("Phase 1 Core Foundation & Scoring Engine is fully operational!")
    print("=" * 60)

if __name__ == "__main__":
    demo()
