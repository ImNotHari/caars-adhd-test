# CAARS Offline Assessment, Scoring & Reporting System

A 100% offline, standalone desktop system in Python for administering the **Conners' Adult ADHD Rating Scales (CAARS)**, standardizing raw scores into T-scores across age/gender cohorts, verifying protocol validity via the Inconsistency Index, and viewing clinical evaluation reports.

---

## Status: Phase 1 & Phase 2 Complete ✅

### Implemented Features
- **Desktop Graphical Interface (`caars/gui/`)**:
  - Built with **CustomTkinter** for high-DPI, dark/light mode clinical desktop UI.
  - **Patient Roster Dashboard**: Search by name or MRN, register new patients, view assessment history.
  - **Paginated 66-Question Test Wizard**:
    - Dual phrasing support (Self-Report vs. Observer-Report wording).
    - 4-point Likert option buttons (`0: Never`, `1: Once in a while`, `2: Often`, `3: Very frequently`).
    - Progress bar and completion tracker.
  - **Clinical Results & Psychometric Profile Viewer**:
    - Protocol Validity indicator (Inconsistency Index score & alert).
    - Embedded **Matplotlib T-Score Profile Chart** with shaded clinical cutoff zones ($T \ge 65$ Elevated, $T \ge 70$ Very Elevated).
    - Side-by-side **Multi-Informant Comparison** (Self vs. Observer delta analysis).
    - Detailed subscale breakdown table with color-coded classification badges.
- **Deterministic Psychometric Scoring Engine (`caars/engine/scoring.py`)**:
  - Scales A, B, C, D (Factor scales), E, F, G (DSM symptom scales), and H (ADHD Index).
  - 8-pair Inconsistency Index algorithm ($|x_1 - x_2|$ summation) with alert threshold $\ge 8$.
- **Normative Engine (`caars/engine/norms.py`)**:
  - Stratified normative conversion tables (`caars/data/norms.json`) across Form, Gender, and Age cohorts (`18-29`, `30-49`, `50+`).
- **Local SQLite Database (`caars/database/db.py`)**:
  - Stores patients, assessments, raw item responses, and calculated subscale metrics.
- **Automated Test Suite (`tests/`)**:
  - 14 automated tests covering scoring, norms, database CRUD, and GUI lifecycle.

---

## How to Run the Desktop Application

### 1. Requirements
- Python 3.10+
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```

### 2. Launch the Desktop GUI
```bash
python main.py
```

### 3. Run in Terminal CLI Mode (Testing/Demo)
```bash
python main.py --cli
```

### 4. Run Automated Test Suite
```bash
python -m pytest tests/ -v
```

---

## Project Structure
```
leap 26 peoject/
├── caars/
│   ├── config.py                 # Subscales & clinical classification cutoffs
│   ├── data/
│   │   ├── questions.json        # 66-item dataset & inconsistency pairs
│   │   ├── norms.json            # Age/Gender norm tables
│   │   └── build_norms.py        # Norm table builder
│   ├── database/
│   │   ├── schema.sql            # SQLite schema
│   │   └── db.py                 # SQLite database manager
│   ├── engine/
│   │   ├── scoring.py            # Subscale sums & inconsistency engine
│   │   └── norms.py              # T-Score & percentile conversion
│   └── gui/
│       ├── app.py                # Main window & view router
│       ├── components/
│       │   ├── chart_canvas.py   # Embedded Matplotlib T-score profile graph
│       │   └── question_card.py  # Interactive Likert option buttons
│       └── views/
│           ├── dashboard_view.py # Patient management & assessment history
│           ├── assessment_view.py# Paginated 66-question test wizard
│           └── report_view.py    # Results viewer & multi-informant analysis
├── tests/
│   ├── test_scoring.py
│   ├── test_norms.py
│   ├── test_db.py
│   └── test_gui.py
├── requirements.txt
├── README.md
└── main.py                       # Application entry point
```

---

## Upcoming: Phase 3
- **Phase 3**: Clinical PDF Report Compiler (ReportLab + Matplotlib multi-page printable export).
