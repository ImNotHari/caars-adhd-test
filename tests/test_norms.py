import pytest
from caars.engine.norms import NormsEngine

@pytest.fixture
def norms():
    return NormsEngine()

def test_age_bracket_calculation(norms):
    # 25 year old as of 2026-01-01
    bracket1 = norms.get_age_bracket("2001-01-01", "2026-01-01")
    assert bracket1 == "18-29"

    # 40 year old
    bracket2 = norms.get_age_bracket("1986-05-15", "2026-01-01")
    assert bracket2 == "30-49"

    # 58 year old
    bracket3 = norms.get_age_bracket("1968-10-10", "2026-01-01")
    assert bracket3 == "50+"

def test_norm_lookup_validity(norms):
    t_score, pct = norms.lookup(
        form="self",
        gender="Male",
        age_bracket="18-29",
        scale_code="H",
        raw_score=13  # near average
    )
    assert 45 <= t_score <= 55
    assert 30 <= pct <= 70

def test_norm_lookup_clamping(norms):
    # Test negative or over-max score clamping
    t_low, _ = norms.lookup("self", "Female", "30-49", "A", -5)
    t_zero, _ = norms.lookup("self", "Female", "30-49", "A", 0)
    assert t_low == t_zero

    t_high, _ = norms.lookup("self", "Female", "30-49", "A", 999)
    t_max, _ = norms.lookup("self", "Female", "30-49", "A", 36)
    assert t_high == t_max

def test_invalid_parameters(norms):
    with pytest.raises(ValueError):
        norms.lookup("invalid_form", "Male", "18-29", "A", 10)

    with pytest.raises(ValueError):
        norms.lookup("self", "InvalidGender", "18-29", "A", 10)

    with pytest.raises(ValueError):
        norms.lookup("self", "Male", "InvalidBracket", "A", 10)

    with pytest.raises(ValueError):
        norms.lookup("self", "Male", "18-29", "INVALID_SCALE", 10)
