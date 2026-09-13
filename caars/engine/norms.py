"""
Normative Conversion Engine for CAARS.
Handles age bracket resolution and exact T-Score / Percentile lookups.
"""

import json
from pathlib import Path
from datetime import datetime, date
from typing import Dict, Any, Tuple, Optional

NORMS_PATH = Path(__file__).resolve().parent.parent / "data" / "norms.json"

class NormsEngine:
    def __init__(self, norms_path: Optional[str | Path] = None):
        path = Path(norms_path) if norms_path else NORMS_PATH
        with open(path, "r", encoding="utf-8") as f:
            self.data = json.load(f)
        self.tables = self.data["tables"]

    @staticmethod
    def get_age_bracket(dob_str: str, as_of_date_str: Optional[str] = None) -> str:
        """
        Calculate age from date of birth (YYYY-MM-DD) and return standard bracket:
        '18-29', '30-49', or '50+'
        """
        dob = datetime.strptime(dob_str.strip(), "%Y-%m-%d").date()
        as_of = (datetime.strptime(as_of_date_str.strip(), "%Y-%m-%d").date()
                 if as_of_date_str else date.today())

        age = as_of.year - dob.year - ((as_of.month, as_of.day) < (dob.month, dob.day))

        if age < 18:
            # CAARS is normed for adults 18+. For late teens near 18, norm against 18-29
            return "18-29"
        elif age <= 29:
            return "18-29"
        elif age <= 49:
            return "30-49"
        else:
            return "50+"

    def lookup(self, form: str, gender: str, age_bracket: str,
               scale_code: str, raw_score: int) -> Tuple[int, float]:
        """
        Lookup (T-Score, Percentile) for given demographic cohort and scale raw score.
        Clamps raw scores to scale range.
        """
        form_key = form.lower().strip()
        if form_key not in self.tables:
            raise ValueError(f"Invalid form '{form}'. Must be 'self' or 'observer'.")

        gender_key = gender.capitalize().strip()
        if gender_key not in self.tables[form_key]:
            raise ValueError(f"Invalid gender '{gender}'. Must be 'Male' or 'Female'.")

        if age_bracket not in self.tables[form_key][gender_key]:
            raise ValueError(f"Invalid age bracket '{age_bracket}'. Must be '18-29', '30-49', or '50+'.")

        cohort_scales = self.tables[form_key][gender_key][age_bracket]
        scale_key = scale_code.upper().strip()
        if scale_key not in cohort_scales:
            raise ValueError(f"Unknown scale code '{scale_code}'.")

        scale_data = cohort_scales[scale_key]
        lookup_table = scale_data["lookup"]
        max_raw = scale_data["max_raw"]

        clamped_raw = max(0, min(int(raw_score), max_raw))
        entry = lookup_table[clamped_raw]

        return entry["t_score"], entry["percentile"]
