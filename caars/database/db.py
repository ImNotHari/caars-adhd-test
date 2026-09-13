"""
SQLite Database Manager for CAARS offline application.
Handles patients, assessment sessions, responses, and calculated scores.
"""

import sqlite3
from pathlib import Path
from typing import Optional, Dict, Any, List

DEFAULT_DB_PATH = Path(__file__).resolve().parent.parent.parent / "caars.db"
SCHEMA_PATH = Path(__file__).resolve().parent / "schema.sql"

class DatabaseManager:
    def __init__(self, db_path: Optional[str | Path] = None):
        self.db_path = str(db_path) if db_path is not None else str(DEFAULT_DB_PATH)
        self.init_db()

    def get_connection(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys = ON")
        return conn

    def init_db(self):
        """Execute schema creation."""
        with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
            schema_sql = f.read()

        with self.get_connection() as conn:
            conn.executescript(schema_sql)

    # ------------------ Patient Operations ------------------

    def create_patient(self, mrn: str, first_name: str, last_name: str,
                       dob: str, gender: str, notes: str = "") -> int:
        query = """
            INSERT INTO patients (mrn, first_name, last_name, dob, gender, notes)
            VALUES (?, ?, ?, ?, ?, ?)
        """
        with self.get_connection() as conn:
            cursor = conn.execute(query, (mrn.strip(), first_name.strip(),
                                          last_name.strip(), dob.strip(),
                                          gender.strip(), notes.strip()))
            return cursor.lastrowid

    def get_patient(self, patient_id: int) -> Optional[Dict[str, Any]]:
        query = "SELECT * FROM patients WHERE id = ?"
        with self.get_connection() as conn:
            row = conn.execute(query, (patient_id,)).fetchone()
            return dict(row) if row else None

    def get_patient_by_mrn(self, mrn: str) -> Optional[Dict[str, Any]]:
        query = "SELECT * FROM patients WHERE mrn = ?"
        with self.get_connection() as conn:
            row = conn.execute(query, (mrn.strip(),)).fetchone()
            return dict(row) if row else None

    def list_patients(self) -> List[Dict[str, Any]]:
        query = "SELECT * FROM patients ORDER BY last_name, first_name ASC"
        with self.get_connection() as conn:
            rows = conn.execute(query).fetchall()
            return [dict(r) for r in rows]

    # ------------------ Assessment Operations ------------------

    def create_assessment(self, patient_id: int, form_type: str, rater_name: str,
                          administered_date: str, relationship: str = "") -> int:
        query = """
            INSERT INTO assessments (patient_id, form_type, rater_name, relationship, administered_date)
            VALUES (?, ?, ?, ?, ?)
        """
        with self.get_connection() as conn:
            cursor = conn.execute(query, (patient_id, form_type, rater_name.strip(),
                                          relationship.strip(), administered_date.strip()))
            return cursor.lastrowid

    def save_responses(self, assessment_id: int, responses: Dict[int, int]):
        """
        Save dictionary of {question_id: score (0-3)}.
        """
        query = """
            INSERT OR REPLACE INTO responses (assessment_id, question_id, score)
            VALUES (?, ?, ?)
        """
        with self.get_connection() as conn:
            for q_id, score in responses.items():
                conn.execute(query, (assessment_id, int(q_id), int(score)))

    def get_responses(self, assessment_id: int) -> Dict[int, int]:
        query = "SELECT question_id, score FROM responses WHERE assessment_id = ? ORDER BY question_id ASC"
        with self.get_connection() as conn:
            rows = conn.execute(query, (assessment_id,)).fetchall()
            return {r["question_id"]: r["score"] for r in rows}

    def save_scores(self, assessment_id: int, inconsistency_score: int,
                    inconsistency_flag: bool, scores: List[Dict[str, Any]]):
        """
        Save computed subscale scores and update assessment status.
        """
        update_assessment_query = """
            UPDATE assessments
            SET inconsistency_score = ?, inconsistency_flag = ?, completed = 1
            WHERE id = ?
        """
        insert_score_query = """
            INSERT OR REPLACE INTO assessment_scores
            (assessment_id, scale_code, scale_name, raw_score, t_score, percentile, classification)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """
        with self.get_connection() as conn:
            conn.execute(update_assessment_query, (inconsistency_score, 1 if inconsistency_flag else 0, assessment_id))
            for s in scores:
                conn.execute(insert_score_query, (
                    assessment_id,
                    s["scale_code"],
                    s["scale_name"],
                    s["raw_score"],
                    s["t_score"],
                    s["percentile"],
                    s["classification"]
                ))

    def get_assessment(self, assessment_id: int) -> Optional[Dict[str, Any]]:
        query = """
            SELECT a.*, p.mrn, p.first_name, p.last_name, p.dob, p.gender
            FROM assessments a
            JOIN patients p ON a.patient_id = p.id
            WHERE a.id = ?
        """
        with self.get_connection() as conn:
            row = conn.execute(query, (assessment_id,)).fetchone()
            if not row:
                return None
            assessment = dict(row)

            # Get scores
            scores_query = "SELECT * FROM assessment_scores WHERE assessment_id = ? ORDER BY scale_code ASC"
            scores_rows = conn.execute(scores_query, (assessment_id,)).fetchall()
            assessment["scores"] = [dict(s) for s in scores_rows]

            return assessment

    def list_assessments_for_patient(self, patient_id: int) -> List[Dict[str, Any]]:
        query = "SELECT * FROM assessments WHERE patient_id = ? ORDER BY administered_date DESC, id DESC"
        with self.get_connection() as conn:
            rows = conn.execute(query, (patient_id,)).fetchall()
            return [dict(r) for r in rows]
