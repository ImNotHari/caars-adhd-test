# CAARS Offline Assessment, Scoring & Reporting System

A 100% offline, standalone desktop system in Python for administering the **Conners' Adult ADHD Rating Scales (CAARS)**, standardizing raw scores into T-scores across age/gender cohorts, verifying protocol validity via the Inconsistency Index, and compiling clinical evaluation reports.

---

## Current Status: Phase 1 Complete ✅

### Implemented Features (Phase 1)
- **Git Repository**: Initialized with clean `.gitignore`.
- **Psychometric Scoring Engine (`caars/engine/scoring.py`)**:
  - Full support for Scales A, B, C, D (Factor scales), E, F, G (DSM symptom scales), and H (ADHD Index).
  - 8-pair Inconsistency Index algorithm with clinical threshold alert ($\ge 8$).
  - Clinical T-score classification cutoffs ($< 60$ Average, $60–64$ Borderline, $65–69$ Elevated, $\ge 70$ Very Elevated).
- **Normative Engine (`caars/engine/norms.py`)**:
  - Embedded norm reference tables (`caars/data/norms.json`) stratified by Form (`self`, `observer`), Gender (`Male`, `Female`), and Age brackets (`18-29`, `30-49`, `50+`).
  - Automatic DOB-to-age-bracket resolver.
- **Embedded Database (`caars/database/`)**:
  - Zero-config SQLite database (`caars.db`) storing patients, assessments, item-level responses (0–3), and subscale scores.
- **Automated Test Suite (`tests/`)**:
  - 11 unit tests covering scoring, norm resolution, score clamping, and SQLite CRUD workflows.

---

## Quick Start

### 1. Requirements
- Python 3.10+
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```

### 2. Run Automated Unit Tests
```bash
python -m pytest tests/ -v
```

### 3. Run Phase 1 Demonstration CLI
```bash
python main.py
```

---

## Project Structure
```
leap 26 peoject/
├── caars/
│   ├── config.py             # Subscales & clinical classification cutoffs
│   ├── data/
│   │   ├── questions.json    # 66-item dataset & inconsistency pairs
│   │   ├── norms.json        # Age/Gender norm tables
│   │   └── build_norms.py    # Norm table builder
│   ├── database/
│   │   ├── schema.sql        # SQLite schema
│   │   └── db.py             # SQLite database manager
│   └── engine/
│       ├── scoring.py        # Subscale sums & inconsistency engine
│       └── norms.py          # T-Score & percentile conversion
├── tests/
│   ├── test_scoring.py
│   ├── test_norms.py
│   └── test_db.py
├── requirements.txt
├── README.md
└── main.py                   # Smoke test / demo CLI
```

---

## Upcoming Phases
- **Phase 2**: CustomTkinter Desktop GUI (Patient management, paginated 66-question assessment wizard, instant profile charts).
- **Phase 3**: Clinical PDF Report Compiler (ReportLab + Matplotlib, exportable multi-informant reports).
