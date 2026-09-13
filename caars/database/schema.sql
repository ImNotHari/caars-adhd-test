-- CAARS Local SQLite Database Schema

CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mrn TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    dob TEXT NOT NULL,
    gender TEXT NOT NULL CHECK (gender IN ('Male', 'Female')),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS assessments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    form_type TEXT NOT NULL CHECK (form_type IN ('self', 'observer')),
    rater_name TEXT NOT NULL,
    relationship TEXT,
    administered_date TEXT NOT NULL,
    inconsistency_score INTEGER DEFAULT 0,
    inconsistency_flag BOOLEAN DEFAULT 0,
    completed BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    assessment_id INTEGER NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    question_id INTEGER NOT NULL CHECK (question_id BETWEEN 1 AND 66),
    score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 3),
    UNIQUE(assessment_id, question_id)
);

CREATE TABLE IF NOT EXISTS assessment_scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    assessment_id INTEGER NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    scale_code TEXT NOT NULL,
    scale_name TEXT NOT NULL,
    raw_score INTEGER NOT NULL,
    t_score INTEGER NOT NULL,
    percentile REAL NOT NULL,
    classification TEXT NOT NULL,
    UNIQUE(assessment_id, scale_code)
);

CREATE INDEX IF NOT EXISTS idx_patient_mrn ON patients(mrn);
CREATE INDEX IF NOT EXISTS idx_assessment_patient ON assessments(patient_id);
CREATE INDEX IF NOT EXISTS idx_responses_assessment ON responses(assessment_id);
CREATE INDEX IF NOT EXISTS idx_scores_assessment ON assessment_scores(assessment_id);
