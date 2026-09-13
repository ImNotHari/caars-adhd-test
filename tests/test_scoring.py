import pytest
from caars.engine.scoring import ScoringEngine

@pytest.fixture
def engine():
    return ScoringEngine()

def test_questions_loaded(engine):
    questions = engine.get_questions_list()
    assert len(questions) == 66
    assert len(engine.inconsistency_pairs) == 8
    # Ensure every question has 1-66 id and scale mapping
    for q in questions:
        assert 1 <= q["id"] <= 66
        assert len(q["scales"]) > 0
        assert "text_self" in q
        assert "text_observer" in q

def test_zero_responses(engine):
    # If all 66 items are rated 0 (never)
    responses = {q["id"]: 0 for q in engine.get_questions_list()}
    result = engine.evaluate_assessment(
        responses=responses,
        form_type="self",
        gender="Male",
        age_bracket="18-29"
    )

    assert result["inconsistency_score"] == 0
    assert result["inconsistency_flag"] is False
    assert result["items_answered"] == 66

    # All raw scores should be 0
    for s in result["scores"]:
        assert s["raw_score"] == 0
        # T-score for 0 raw score in general population should be in Average range (< 60)
        assert s["t_score"] <= 50
        assert s["classification"] == "Average"

def test_scale_g_is_sum_of_e_and_f(engine):
    # Rate odd questions 1, even questions 2
    responses = {q["id"]: (1 if q["id"] % 2 == 1 else 2) for q in engine.get_questions_list()}
    raw = engine.calculate_raw_scores(responses)
    assert raw["G"] == raw["E"] + raw["F"]

def test_inconsistency_index_detection(engine):
    # Set all pairs to completely opposite values (0 vs 3)
    responses = {q["id"]: 0 for q in engine.get_questions_list()}
    for q1, q2 in engine.inconsistency_pairs:
        responses[q1] = 0
        responses[q2] = 3

    inc_score = engine.calculate_inconsistency_index(responses)
    # 8 pairs * 3 = 24
    assert inc_score == 24

    result = engine.evaluate_assessment(
        responses=responses,
        form_type="self",
        gender="Female",
        age_bracket="30-49"
    )
    assert result["inconsistency_score"] == 24
    assert result["inconsistency_flag"] is True
    assert "High response inconsistency" in result["inconsistency_warning"]

def test_severe_elevation(engine):
    # Rate all items 3 (very frequently)
    responses = {q["id"]: 3 for q in engine.get_questions_list()}
    result = engine.evaluate_assessment(
        responses=responses,
        form_type="self",
        gender="Male",
        age_bracket="30-49"
    )

    adhd_index = next(s for s in result["scores"] if s["scale_code"] == "H")
    assert adhd_index["raw_score"] > 30
    assert adhd_index["t_score"] >= 70
    assert adhd_index["classification"] == "Very Elevated"
