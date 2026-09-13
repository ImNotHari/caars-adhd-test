"""
CAARS Adult ADHD Assessment & Scoring System
Entry point for GUI Desktop application or CLI test runner.
"""

import sys
import argparse
from datetime import date

def run_cli_demo():
    print("=" * 60)
    print("  CAARS Offline Assessment & Scoring System (CLI Mode)")
    print("=" * 60)

    from caars.engine.scoring import ScoringEngine
    from caars.engine.norms import NormsEngine
    from caars.database.db import DatabaseManager

    db = DatabaseManager()
    engine = ScoringEngine()

    print("\n1. Initializing Local Database: caars.db ... OK")

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

    age_bracket = NormsEngine.get_age_bracket("1995-06-15")
    print(f"   Demographic Norm Cohort: Male, Age bracket: {age_bracket}")

    # Sample responses with elevated inattention
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

    print("=" * 60)

def main():
    parser = argparse.ArgumentParser(description="CAARS Adult ADHD Assessment System")
    parser.add_argument("--cli", action="store_true", help="Run CLI demo mode instead of Desktop GUI")
    args = parser.parse_args()

    if args.cli:
        run_cli_demo()
    else:
        from caars.gui.app import CAARSApp
        app = CAARSApp()
        app.mainloop()

if __name__ == "__main__":
    main()
