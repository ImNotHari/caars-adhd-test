import pytest
from pathlib import Path
from caars.reporting.chart_exporter import export_tscore_chart
from caars.reporting.pdf_builder import PDFReportBuilder

@pytest.fixture
def sample_assessment():
    return {
        "id": 1,
        "mrn": "TEST-MRN-99",
        "first_name": "Jordan",
        "last_name": "Lee",
        "dob": "1993-07-14",
        "gender": "Female",
        "form_type": "self",
        "rater_name": "Jordan Lee",
        "relationship": "Self",
        "administered_date": "2026-09-13",
        "inconsistency_score": 4,
        "inconsistency_flag": 0,
        "scores": [
            {"scale_code": "A", "scale_name": "Inattention / Memory Problems", "raw_score": 24, "t_score": 72, "percentile": 98.6, "classification": "Very Elevated"},
            {"scale_code": "B", "scale_name": "Hyperactivity / Restlessness", "raw_score": 14, "t_score": 58, "percentile": 78.8, "classification": "Average"},
            {"scale_code": "C", "scale_name": "Impulsivity / Emotional Lability", "raw_score": 18, "t_score": 64, "percentile": 91.9, "classification": "Borderline"},
            {"scale_code": "D", "scale_name": "Problems with Self-Concept", "raw_score": 19, "t_score": 67, "percentile": 95.5, "classification": "Elevated"},
            {"scale_code": "E", "scale_name": "DSM Inattentive Symptoms", "raw_score": 21, "t_score": 75, "percentile": 99.4, "classification": "Very Elevated"},
            {"scale_code": "F", "scale_name": "DSM Hyperactive-Impulsive Symptoms", "raw_score": 11, "t_score": 59, "percentile": 81.6, "classification": "Average"},
            {"scale_code": "G", "scale_name": "Total ADHD Symptoms", "raw_score": 32, "t_score": 69, "percentile": 97.1, "classification": "Elevated"},
            {"scale_code": "H", "scale_name": "ADHD Index", "raw_score": 25, "t_score": 74, "percentile": 99.2, "classification": "Very Elevated"},
        ]
    }

@pytest.fixture
def sample_observer_assessment():
    return {
        "id": 2,
        "mrn": "TEST-MRN-99",
        "first_name": "Jordan",
        "last_name": "Lee",
        "dob": "1993-07-14",
        "gender": "Female",
        "form_type": "observer",
        "rater_name": "Morgan Lee",
        "relationship": "Spouse",
        "administered_date": "2026-09-13",
        "inconsistency_score": 2,
        "inconsistency_flag": 0,
        "scores": [
            {"scale_code": "A", "scale_name": "Inattention / Memory Problems", "raw_score": 20, "t_score": 66, "percentile": 94.5, "classification": "Elevated"},
            {"scale_code": "B", "scale_name": "Hyperactivity / Restlessness", "raw_score": 15, "t_score": 60, "percentile": 84.1, "classification": "Borderline"},
            {"scale_code": "C", "scale_name": "Impulsivity / Emotional Lability", "raw_score": 16, "t_score": 61, "percentile": 86.4, "classification": "Borderline"},
            {"scale_code": "D", "scale_name": "Problems with Self-Concept", "raw_score": 12, "t_score": 54, "percentile": 65.5, "classification": "Average"},
            {"scale_code": "E", "scale_name": "DSM Inattentive Symptoms", "raw_score": 18, "t_score": 68, "percentile": 96.4, "classification": "Elevated"},
            {"scale_code": "F", "scale_name": "DSM Hyperactive-Impulsive Symptoms", "raw_score": 12, "t_score": 61, "percentile": 86.4, "classification": "Borderline"},
            {"scale_code": "G", "scale_name": "Total ADHD Symptoms", "raw_score": 30, "t_score": 66, "percentile": 94.5, "classification": "Elevated"},
            {"scale_code": "H", "scale_name": "ADHD Index", "raw_score": 22, "t_score": 68, "percentile": 96.4, "classification": "Elevated"},
        ]
    }

def test_chart_exporter(tmp_path, sample_assessment):
    out_img = tmp_path / "chart_test.png"
    result = export_tscore_chart(
        scores=sample_assessment["scores"],
        output_image_path=out_img
    )
    assert Path(result).exists()
    assert Path(result).stat().st_size > 10000

def test_single_assessment_pdf_generation(tmp_path, sample_assessment):
    builder = PDFReportBuilder()
    out_pdf = tmp_path / "single_report.pdf"

    generated = builder.generate_report(
        assessment=sample_assessment,
        output_pdf_path=out_pdf
    )

    assert Path(generated).exists()
    assert Path(generated).stat().st_size > 15000

    # Verify PDF magic header
    with open(generated, "rb") as f:
        header = f.read(5)
        assert header == b"%PDF-"

def test_multi_informant_pdf_generation(tmp_path, sample_assessment, sample_observer_assessment):
    builder = PDFReportBuilder()
    out_pdf = tmp_path / "multi_informant_report.pdf"

    generated = builder.generate_report(
        assessment=sample_assessment,
        output_pdf_path=out_pdf,
        other_assessment=sample_observer_assessment
    )

    assert Path(generated).exists()
    assert Path(generated).stat().st_size > 20000

    with open(generated, "rb") as f:
        header = f.read(5)
        assert header == b"%PDF-"
