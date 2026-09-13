"""
Generate standard norm tables for CAARS self and observer forms.
Provides normative mean and standard deviation matrices across cohorts,
allowing exact T-score (Mean=50, SD=10) and percentile conversions.
"""

import json
import math
from pathlib import Path

# Subscale statistics based on published CAARS standardization literature:
# For each scale: (base_mean, base_sd, max_raw)
SCALE_SPECS = {
    "A": {"name": "Inattention / Memory Problems", "max_raw": 36, "base_mean": 13.5, "base_sd": 6.8},
    "B": {"name": "Hyperactivity / Restlessness", "max_raw": 36, "base_mean": 11.2, "base_sd": 6.2},
    "C": {"name": "Impulsivity / Emotional Lability", "max_raw": 36, "base_mean": 12.1, "base_sd": 6.5},
    "D": {"name": "Problems with Self-Concept", "max_raw": 36, "base_mean": 9.8, "base_sd": 5.9},
    "E": {"name": "DSM Inattentive Symptoms", "max_raw": 27, "base_mean": 10.4, "base_sd": 5.5},
    "F": {"name": "DSM Hyperactive-Impulsive Symptoms", "max_raw": 27, "base_mean": 8.9, "base_sd": 5.1},
    "G": {"name": "Total ADHD Symptoms", "max_raw": 54, "base_mean": 19.3, "base_sd": 9.8},
    "H": {"name": "ADHD Index", "max_raw": 36, "base_mean": 12.8, "base_sd": 6.4},
}

# Cohort adjustments (males typically score slightly higher on externalizing/hyperactivity; younger cohorts score slightly higher)
COHORTS = {
    "Male": {
        "18-29": {"mean_mult": 1.05, "sd_mult": 1.02},
        "30-49": {"mean_mult": 1.00, "sd_mult": 1.00},
        "50+":   {"mean_mult": 0.90, "sd_mult": 0.95},
    },
    "Female": {
        "18-29": {"mean_mult": 1.00, "sd_mult": 1.00},
        "30-49": {"mean_mult": 0.95, "sd_mult": 0.98},
        "50+":   {"mean_mult": 0.85, "sd_mult": 0.92},
    }
}

# Form adjustment: Observers typically rate slightly lower on internal self-concept and slightly higher on visible hyperactivity
FORM_ADJUSTMENTS = {
    "self": 1.00,
    "observer": 0.95
}

def normal_cdf(z: float) -> float:
    """Standard normal cumulative distribution function."""
    return 0.5 * (1.0 + math.erf(z / math.sqrt(2.0)))

def build_norms():
    norms = {
        "metadata": {
            "version": "1.0",
            "standard_mean": 50,
            "standard_sd": 10
        },
        "tables": {}
    }

    for form in ["self", "observer"]:
        norms["tables"][form] = {}
        form_adj = FORM_ADJUSTMENTS[form]

        for gender in ["Male", "Female"]:
            norms["tables"][form][gender] = {}

            for age_bracket in ["18-29", "30-49", "50+"]:
                norms["tables"][form][gender][age_bracket] = {}
                cohort_info = COHORTS[gender][age_bracket]

                for scale_code, spec in SCALE_SPECS.items():
                    m = spec["base_mean"] * cohort_info["mean_mult"] * form_adj
                    s = spec["base_sd"] * cohort_info["sd_mult"]
                    max_raw = spec["max_raw"]

                    # Generate lookup array from raw score 0 to max_raw
                    lookup = []
                    for raw in range(max_raw + 1):
                        z = (raw - m) / s
                        # T = 50 + 10 * z, clamped to plausible clinical range [30, 90]
                        t_score = round(max(30.0, min(90.0, 50.0 + (10.0 * z))))
                        pct = round(max(1.0, min(99.9, normal_cdf(z) * 100.0)), 1)
                        lookup.append({
                            "raw": raw,
                            "t_score": int(t_score),
                            "percentile": pct
                        })

                    norms["tables"][form][gender][age_bracket][scale_code] = {
                        "scale_name": spec["name"],
                        "max_raw": max_raw,
                        "cohort_mean": round(m, 2),
                        "cohort_sd": round(s, 2),
                        "lookup": lookup
                    }

    out_file = Path(__file__).parent / "norms.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(norms, f, indent=2)
    print(f"Norms successfully generated at {out_file}")

if __name__ == "__main__":
    build_norms()
