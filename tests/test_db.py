import pytest
from caars.database.db import DatabaseManager

@pytest.fixture
def db(tmp_path):
    db_file = tmp_path / "test_caars.db"
    return DatabaseManager(db_path=db_file)

def test_patient_crud(db):
    patient_id = db.create_patient(
        mrn="PT-1001",
        first_name="John",
        last_name="Doe",
        dob="1992-04-12",
        gender="Male",
        notes="Referred for adult attention evaluation"
    )
    assert patient_id > 0

    patient = db.get_patient(patient_id)
    assert patient is not None
    assert patient["mrn"] == "PT-1001"
    assert patient["first_name"] == "John"
    assert patient["gender"] == "Male"

    by_mrn = db.get_patient_by_mrn("PT-1001")
    assert by_mrn["id"] == patient_id

    patients_list = db.list_patients()
    assert len(patients_list) == 1

def test_assessment_flow(db):
    p_id = db.create_patient("PT-2002", "Jane", "Smith", "1988-11-20", "Female")

    # Create assessment
    ass_id = db.create_assessment(
        patient_id=p_id,
        form_type="self",
        rater_name="Jane Smith",
        administered_date="2026-09-13",
        relationship="Self"
    )
    assert ass_id > 0

    # Save responses
    sample_responses = {1: 2, 2: 3, 3: 1, 4: 0}
    db.save_responses(ass_id, sample_responses)

    saved_resp = db.get_responses(ass_id)
    assert saved_resp == sample_responses

    # Save calculated scores
    sample_scores = [
        {
            "scale_code": "A",
            "scale_name": "Inattention / Memory Problems",
            "raw_score": 18,
            "t_score": 67,
            "percentile": 95.5,
            "classification": "Elevated"
        },
        {
            "scale_code": "H",
            "scale_name": "ADHD Index",
            "raw_score": 21,
            "t_score": 72,
            "percentile": 98.6,
            "classification": "Very Elevated"
        }
    ]
    db.save_scores(
        assessment_id=ass_id,
        inconsistency_score=3,
        inconsistency_flag=False,
        scores=sample_scores
    )

    assessment = db.get_assessment(ass_id)
    assert assessment is not None
    assert assessment["completed"] == 1
    assert assessment["inconsistency_score"] == 3
    assert assessment["inconsistency_flag"] == 0
    assert len(assessment["scores"]) == 2
    assert assessment["scores"][0]["scale_code"] == "A"
    assert assessment["scores"][1]["t_score"] == 72
