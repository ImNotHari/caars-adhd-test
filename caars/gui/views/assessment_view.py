"""
Paginated 66-item Assessment Wizard for CAARS.
Handles response collection, autosave tracking, pagination, and submission to the scoring engine.
"""

from datetime import date
from typing import Callable, Dict, Any, Optional
import customtkinter as ctk
from tkinter import messagebox

from caars.database.db import DatabaseManager
from caars.engine.scoring import ScoringEngine
from caars.engine.norms import NormsEngine
from caars.gui.components.question_card import QuestionCard

PAGE_SIZE = 10

class AssessmentView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager,
                 engine: ScoringEngine,
                 patient_id: int,
                 form_type: str,
                 on_completed: Callable[[int], None],
                 on_cancel: Callable[[], None],
                 **kwargs):
        super().__init__(master, **kwargs)
        self.db = db
        self.engine = engine
        self.patient_id = patient_id
        self.form_type = form_type  # 'self' or 'observer'
        self.on_completed = on_completed
        self.on_cancel = on_cancel

        self.patient = self.db.get_patient(patient_id)
        self.questions = self.engine.get_questions_list()
        self.total_questions = len(self.questions)
        self.total_pages = (self.total_questions + PAGE_SIZE - 1) // PAGE_SIZE
        self.current_page = 0

        # State storage: {question_id: score (0-3)}
        self.responses: Dict[int, int] = {}

        self.grid_rowconfigure(2, weight=1)
        self.grid_columnconfigure(0, weight=1)

        self._build_header()
        self._build_progress_bar()
        self._build_scroll_area()
        self._build_footer()

        self.load_page(0)

    def _build_header(self):
        header = ctk.CTkFrame(self, corner_radius=8)
        header.grid(row=0, column=0, sticky="ew", padx=14, pady=(12, 6))
        header.grid_columnconfigure(1, weight=1)

        form_title = "Self-Report (CAARS-S:L)" if self.form_type == "self" else "Observer Report (CAARS-O:L)"
        p_name = f"{self.patient['first_name']} {self.patient['last_name']}"

        title_lbl = ctk.CTkLabel(
            header,
            text=f"Administering: {form_title}",
            font=ctk.CTkFont(size=16, weight="bold")
        )
        title_lbl.grid(row=0, column=0, padx=14, pady=(10, 4), sticky="w")

        p_info = ctk.CTkLabel(
            header,
            text=f"Patient: {p_name} | MRN: {self.patient['mrn']} | Gender: {self.patient['gender']} | DOB: {self.patient['dob']}",
            font=ctk.CTkFont(size=12),
            text_color="gray"
        )
        p_info.grid(row=1, column=0, padx=14, pady=(0, 10), sticky="w")

        # Rater fields
        rater_frame = ctk.CTkFrame(header, fg_color="transparent")
        rater_frame.grid(row=0, column=1, rowspan=2, padx=14, pady=10, sticky="e")

        ctk.CTkLabel(rater_frame, text="Rater Name:", font=ctk.CTkFont(size=12)).pack(side="left", padx=(0, 4))
        self.rater_entry = ctk.CTkEntry(rater_frame, width=150)
        default_rater = p_name if self.form_type == "self" else ""
        self.rater_entry.insert(0, default_rater)
        self.rater_entry.pack(side="left", padx=(0, 10))

        if self.form_type == "observer":
            ctk.CTkLabel(rater_frame, text="Relationship:", font=ctk.CTkFont(size=12)).pack(side="left", padx=(0, 4))
            self.rel_entry = ctk.CTkEntry(rater_frame, width=120, placeholder_text="Spouse, Friend...")
            self.rel_entry.pack(side="left")
        else:
            self.rel_entry = None

    def _build_progress_bar(self):
        prog_frame = ctk.CTkFrame(self, fg_color="transparent")
        prog_frame.grid(row=1, column=0, sticky="ew", padx=14, pady=(0, 6))
        prog_frame.grid_columnconfigure(0, weight=1)

        self.progress_bar = ctk.CTkProgressBar(prog_frame, height=10)
        self.progress_bar.grid(row=0, column=0, sticky="ew", padx=(0, 12))
        self.progress_bar.set(0)

        self.prog_label = ctk.CTkLabel(
            prog_frame,
            text=f"Answered: 0 / {self.total_questions} (0%)",
            font=ctk.CTkFont(size=11, weight="bold")
        )
        self.prog_label.grid(row=0, column=1, sticky="e")

    def _build_scroll_area(self):
        self.scroll_frame = ctk.CTkScrollableFrame(self, corner_radius=8)
        self.scroll_frame.grid(row=2, column=0, sticky="nsew", padx=14, pady=4)
        self.scroll_frame.grid_columnconfigure(0, weight=1)

    def _build_footer(self):
        footer = ctk.CTkFrame(self, corner_radius=8)
        footer.grid(row=3, column=0, sticky="ew", padx=14, pady=(6, 12))

        cancel_btn = ctk.CTkButton(
            footer,
            text="Cancel",
            fg_color="transparent",
            border_width=1,
            text_color=("gray20", "gray80"),
            hover_color=("gray90", "gray30"),
            command=self.on_cancel
        )
        cancel_btn.pack(side="left", padx=12, pady=10)

        self.prev_btn = ctk.CTkButton(
            footer,
            text="◀ Previous Page",
            width=120,
            command=self.prev_page
        )
        self.prev_btn.pack(side="left", padx=6, pady=10)

        self.page_lbl = ctk.CTkLabel(
            footer,
            text=f"Page 1 of {self.total_pages}",
            font=ctk.CTkFont(size=12, weight="bold")
        )
        self.page_lbl.pack(side="left", padx=12, pady=10)

        self.next_btn = ctk.CTkButton(
            footer,
            text="Next Page ▶",
            width=120,
            command=self.next_page
        )
        self.next_btn.pack(side="left", padx=6, pady=10)

        self.submit_btn = ctk.CTkButton(
            footer,
            text="✓ Submit & Compute Scores",
            fg_color="#10b981",
            hover_color="#047857",
            font=ctk.CTkFont(size=13, weight="bold"),
            command=self.submit_assessment
        )
        self.submit_btn.pack(side="right", padx=14, pady=10)

    def load_page(self, page_index: int):
        self.current_page = page_index

        for w in self.scroll_frame.winfo_children():
            w.destroy()

        start_idx = page_index * PAGE_SIZE
        end_idx = min(start_idx + PAGE_SIZE, self.total_questions)
        page_items = self.questions[start_idx:end_idx]

        for q in page_items:
            qid = q["id"]
            q_text = q["text_self"] if self.form_type == "self" else q["text_observer"]
            card = QuestionCard(
                self.scroll_frame,
                q_id=qid,
                text=q_text,
                current_score=self.responses.get(qid),
                on_select=self._on_score_selected
            )
            card.pack(fill="x", pady=5, padx=4)

        self.page_lbl.configure(text=f"Page {page_index + 1} of {self.total_pages}")
        self.prev_btn.configure(state="normal" if page_index > 0 else "disabled")
        self.next_btn.configure(state="normal" if page_index < self.total_pages - 1 else "disabled")

    def _on_score_selected(self, q_id: int, score: int):
        self.responses[q_id] = score
        self._update_progress()

    def _update_progress(self):
        answered = len(self.responses)
        pct = (answered / self.total_questions)
        self.progress_bar.set(pct)
        self.prog_label.configure(
            text=f"Answered: {answered} / {self.total_questions} ({int(pct * 100)}%)"
        )

    def next_page(self):
        if self.current_page < self.total_pages - 1:
            self.load_page(self.current_page + 1)

    def prev_page(self):
        if self.current_page > 0:
            self.load_page(self.current_page - 1)

    def submit_assessment(self):
        rater_name = self.rater_entry.get().strip()
        if not rater_name:
            messagebox.showerror("Rater Required", "Please provide the rater's name.")
            return

        relationship = self.rel_entry.get().strip() if self.rel_entry else "Self"

        unanswered = [q["id"] for q in self.questions if q["id"] not in self.responses]
        if unanswered:
            confirm = messagebox.askyesno(
                "Incomplete Assessment",
                f"There are {len(unanswered)} unanswered questions.\n"
                f"Missing items: {unanswered[:10]}{'...' if len(unanswered) > 10 else ''}\n\n"
                f"Do you want to proceed anyway? (Unanswered items will be scored as 0)"
            )
            if not confirm:
                return

        # Score with engine
        age_bracket = NormsEngine.get_age_bracket(self.patient["dob"])
        results = self.engine.evaluate_assessment(
            responses=self.responses,
            form_type=self.form_type,
            gender=self.patient["gender"],
            age_bracket=age_bracket
        )

        # Save to SQLite
        ass_id = self.db.create_assessment(
            patient_id=self.patient_id,
            form_type=self.form_type,
            rater_name=rater_name,
            administered_date=str(date.today()),
            relationship=relationship
        )
        self.db.save_responses(ass_id, self.responses)
        self.db.save_scores(
            assessment_id=ass_id,
            inconsistency_score=results["inconsistency_score"],
            inconsistency_flag=results["inconsistency_flag"],
            scores=results["scores"]
        )

        messagebox.showinfo("Assessment Scored", "Assessment successfully scored and recorded!")
        self.on_completed(ass_id)
