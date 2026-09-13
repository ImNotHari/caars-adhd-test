import pytest
from caars.gui.app import CAARSApp
from caars.database.db import DatabaseManager

@pytest.fixture(scope="module")
def shared_app(tmp_path_factory):
    db_file = tmp_path_factory.mktemp("gui") / "gui_test.db"
    app = CAARSApp(db_path=str(db_file))
    app.update_idletasks()
    yield app
    try:
        app.quit()
        app.destroy()
    except Exception:
        pass

def test_gui_initialization(shared_app):
    assert shared_app.title() == "CAARS Adult ADHD Assessment & Scoring System (Offline)"
    assert shared_app.current_view is not None

def test_gui_patient_creation_and_navigation(shared_app):
    p_id = shared_app.db.create_patient(
        mrn="GUI-TEST-01",
        first_name="Sam",
        last_name="Rivers",
        dob="1990-03-20",
        gender="Female"
    )
    shared_app.show_dashboard()
    shared_app.update_idletasks()

    shared_app.start_assessment(patient_id=p_id, form_type="self")
    shared_app.update_idletasks()

    from caars.gui.views.assessment_view import AssessmentView
    assert isinstance(shared_app.current_view, AssessmentView)
    assert shared_app.current_view.patient_id == p_id
    assert shared_app.current_view.total_questions == 66

def test_gui_chart_rendering(shared_app):
    from caars.gui.components.chart_canvas import TScoreChart

    chart = TScoreChart(shared_app)
    sample_scores = [
        {"scale_code": "A", "t_score": 68},
        {"scale_code": "B", "t_score": 52},
        {"scale_code": "C", "t_score": 74},
        {"scale_code": "D", "t_score": 58},
        {"scale_code": "E", "t_score": 71},
        {"scale_code": "F", "t_score": 62},
        {"scale_code": "G", "t_score": 69},
        {"scale_code": "H", "t_score": 73},
    ]
    obs_scores = [
        {"scale_code": "A", "t_score": 60},
        {"scale_code": "B", "t_score": 55},
        {"scale_code": "C", "t_score": 65},
        {"scale_code": "D", "t_score": 50},
        {"scale_code": "E", "t_score": 62},
        {"scale_code": "F", "t_score": 58},
        {"scale_code": "G", "t_score": 61},
        {"scale_code": "H", "t_score": 64},
    ]

    # Test dark mode render
    chart.render_profile(scores=sample_scores, observer_scores=obs_scores, is_dark=True)
    # Test light mode render
    chart.render_profile(scores=sample_scores, observer_scores=obs_scores, is_dark=False)
    chart.destroy()
