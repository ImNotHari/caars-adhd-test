"""
Configuration constants and clinical cutoff thresholds for CAARS.
"""

# Likert Scale response values (0 to 3)
RATING_SCALE = {
    0: "Not at all, never",
    1: "Just a little, once in a while",
    2: "Pretty much, often",
    3: "Very much, very frequently",
}

# Subscale identifiers & full descriptive names
SUBSCALE_NAMES = {
    "A": "Inattention / Memory Problems",
    "B": "Hyperactivity / Restlessness",
    "C": "Impulsivity / Emotional Lability",
    "D": "Problems with Self-Concept",
    "E": "DSM Inattentive Symptoms",
    "F": "DSM Hyperactive-Impulsive Symptoms",
    "G": "Total ADHD Symptoms",
    "H": "ADHD Index",
}

# Clinical T-Score cutoff boundaries and classifications
T_SCORE_CUTOFFS = [
    (70, "Very Elevated", ">= 70 (Very Elevated: 2+ SD above average, severe concern)"),
    (65, "Elevated", "65–69 (Elevated: 1.5 SD above average, clinically significant)"),
    (60, "Borderline", "60–64 (Borderline / High Average: slightly elevated)"),
    (0,  "Average", "< 60 (Average / Within Normal Limits)"),
]

def classify_t_score(t_score: float) -> tuple[str, str]:
    """
    Return (classification, description) for a given T-score.
    """
    for cutoff, label, description in T_SCORE_CUTOFFS:
        if t_score >= cutoff:
            return label, description
    return "Average", "< 60 (Average / Within Normal Limits)"

# Inconsistency Index threshold
# A sum of absolute differences >= 8 across the 8 item pairs indicates inconsistent responding.
INCONSISTENCY_FLAG_THRESHOLD = 8

# Form options
FORM_TYPES = {
    "self": "Self-Report (CAARS-S:L)",
    "observer": "Observer Report (CAARS-O:L)",
}

# Supported Age Brackets for Norming
AGE_BRACKETS = ["18-29", "30-49", "50+"]
GENDERS = ["Male", "Female"]
