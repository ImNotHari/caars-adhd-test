# CAARS Offline Assessment, Scoring & Clinical Reporting System

A 100% offline, standalone desktop system in Python for administering the **Conners' Adult ADHD Rating Scales (CAARS)**, standardizing raw scores into T-scores across age/gender cohorts, verifying protocol validity via the Inconsistency Index, and compiling publication-grade clinical PDF reports.

---

## Status: All 3 Phases Complete ✅

### Implemented Features
1. **Clinical PDF Report Compiler (`caars/reporting/`)**:
   - Built with **ReportLab** and **Matplotlib** for high-resolution, print-ready document export.
   - **Page 1**: Formal clinical header, patient and rater demographics, Inconsistency Index protocol validity banner, and embedded high-DPI T-score profile chart with shaded clinical cutoff zones ($T \ge 65$ and $T \ge 70$).
   - **Page 2**: Subscale diagnostic findings table (Raw, T-score, Percentile, Color-coded classification), multi-informant discrepancy analysis table ($\Delta = \text{Self} - \text{Observer}$), automated clinical narrative summary, and clinician sign-off block.
   - **Two-Pass Dynamic Numbered Canvas**: Auto-computes "Page X of Y" and confidential medical footers.
2. **Desktop Graphical Interface (`caars/gui/`)**:
   - Built with **CustomTkinter** for high-DPI, dark/light mode clinical desktop UI.
   - **Patient Roster Dashboard**: Search by name or MRN, register new patients, view assessment history.
   - **Paginated 66-Question Test Wizard**:
     - Dual phrasing support (Self-Report vs. Observer-Report wording).
     - 4-point Likert option buttons (`0: Never`, `1: Once in a while`, `2: Often`, `3: Very frequently`).
     - Progress bar and completion tracker.
   - **Clinical Results & Psychometric Profile Viewer**:
     - 1-click **"📄 Export PDF Report"** button with native file-save dialog and instant preview opener.
     - Embedded dynamic Matplotlib T-score profile graph.
     - Side-by-side **Multi-Informant Comparison** (Self vs. Observer delta analysis).
     - Detailed subscale breakdown table with color-coded classification badges.
3. **Deterministic Psychometric Scoring Engine (`caars/engine/scoring.py`)**:
   - Scales A, B, C, D (Factor scales), E, F, G (DSM symptom scales), and H (ADHD Index).
   - 8-pair Inconsistency Index algorithm ($|x_1 - x_2|$ summation) with alert threshold $\ge 8$.
4. **Normative Engine (`caars/engine/norms.py`)**:
   - Stratified normative conversion tables (`caars/data/norms.json`) across Form, Gender, and Age cohorts (`18-29`, `30-49`, `50+`).
5. **Local SQLite Database (`caars/database/db.py`)**:
   - Stores patients, assessments, raw item responses, and calculated subscale metrics.
6. **Automated Test Suite (`tests/`)**:
   - 17 automated unit tests covering scoring, norms, database CRUD, GUI lifecycle, and PDF compilation.

---

## How to Run

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
- Click **"+ New Patient"** or select an existing patient.
- Click **"Start Self-Report"** or **"Start Observer Report"** to launch the 66-question wizard.
- Complete the assessment and click **"Submit & Compute Scores"**.
- View the real-time T-score chart and click **"📄 Export PDF Report"** to save a clinical PDF.

### 3. Run in Terminal CLI Mode (Testing & Demo PDF Export)
```bash
python main.py --cli
```
- Automatically scores a demonstration profile and compiles a clinical report to `exports/`.

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
│   ├── gui/
│   │   ├── app.py                # Main window & view router
│   │   ├── components/
│   │   │   ├── chart_canvas.py   # Embedded Matplotlib T-score profile graph
│   │   │   └── question_card.py  # Interactive Likert option buttons
│   │   └── views/
│   │       ├── dashboard_view.py # Patient management & assessment history
│   │       ├── assessment_view.py# Paginated 66-question test wizard
│   │       └── report_view.py    # Results viewer & PDF export trigger
│   └── reporting/
│       ├── chart_exporter.py     # High-DPI print-optimized chart generator
│       └── pdf_builder.py        # ReportLab multi-page clinical PDF generator
├── tests/
│   ├── test_scoring.py
│   ├── test_norms.py
│   ├── test_db.py
│   ├── test_gui.py
│   └── test_reporting.py
├── exports/                      # Generated PDF reports
├── requirements.txt
├── README.md
└── main.py                       # Application entry point
```
