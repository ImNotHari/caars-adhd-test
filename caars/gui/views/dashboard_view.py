"""
Dashboard and Patient Management View.
Allows adding patients, searching the roster, and viewing past assessments.
"""

from datetime import datetime, date
from typing import Callable, Optional
import customtkinter as ctk
from tkinter import messagebox

from caars.database.db import DatabaseManager
from caars.engine.norms import NormsEngine

class DashboardView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager,
                 on_start_assessment: Callable[[int, str], None],
                 on_view_report: Callable[[int], None],
                 **kwargs):
        super().__init__(master, **kwargs)
        self.db = db
        self.on_start_assessment = on_start_assessment
        self.on_view_report = on_view_report
        self.selected_patient_id: Optional[int] = None

        self.grid_columnconfigure(0, weight=4)
        self.grid_columnconfigure(1, weight=6)
        self.grid_rowconfigure(0, weight=1)

        self._build_patient_list_panel()
        self._build_patient_detail_panel()
        self.refresh_patients()

    def _build_patient_list_panel(self):
        panel = ctk.CTkFrame(self, corner_radius=10)
        panel.grid(row=0, column=0, sticky="nsew", padx=(10, 5), pady=10)
        panel.grid_rowconfigure(2, weight=1)
        panel.grid_columnconfigure(0, weight=1)

        # Header & Add Button
        top_bar = ctk.CTkFrame(panel, fg_color="transparent")
        top_bar.grid(row=0, column=0, sticky="ew", padx=12, pady=(12, 6))
        top_bar.grid_columnconfigure(0, weight=1)

        lbl = ctk.CTkLabel(top_bar, text="Patients Roster", font=ctk.CTkFont(size=18, weight="bold"))
        lbl.grid(row=0, column=0, sticky="w")

        add_btn = ctk.CTkButton(
            top_bar,
            text="+ New Patient",
            width=105,
            height=30,
            command=self._open_new_patient_dialog
        )
        add_btn.grid(row=0, column=1, sticky="e")

        # Search Bar
        self.search_var = ctk.StringVar()
        self.search_var.trace_add("write", lambda *args: self.filter_patients())
        search_entry = ctk.CTkEntry(
            panel,
            placeholder_text="Search by name or MRN...",
            textvariable=self.search_var,
            height=32
        )
        search_entry.grid(row=1, column=0, sticky="ew", padx=12, pady=(0, 8))

        # Scrollable Patient List
        self.patient_scroll = ctk.CTkScrollableFrame(panel, corner_radius=6)
        self.patient_scroll.grid(row=2, column=0, sticky="nsew", padx=10, pady=(0, 10))

    def _build_patient_detail_panel(self):
        self.detail_panel = ctk.CTkFrame(self, corner_radius=10)
        self.detail_panel.grid(row=0, column=1, sticky="nsew", padx=(5, 10), pady=10)
        self.detail_panel.grid_rowconfigure(2, weight=1)
        self.detail_panel.grid_columnconfigure(0, weight=1)

        # Header
        self.detail_title = ctk.CTkLabel(
            self.detail_panel,
            text="Select a patient from the left to view details",
            font=ctk.CTkFont(size=17, weight="bold"),
            anchor="w"
        )
        self.detail_title.grid(row=0, column=0, sticky="ew", padx=16, pady=(14, 6))

        # Demographic summary cards
        self.info_box = ctk.CTkFrame(self.detail_panel, fg_color=("gray90", "gray20"), corner_radius=8)
        self.info_box.grid(row=1, column=0, sticky="ew", padx=14, pady=6)
        self.info_label = ctk.CTkLabel(
            self.info_box,
            text="No patient selected.",
            justify="left",
            anchor="w",
            font=ctk.CTkFont(size=13)
        )
        self.info_label.pack(fill="x", padx=12, pady=10)

        # Assessment History Frame
        history_frame = ctk.CTkFrame(self.detail_panel, fg_color="transparent")
        history_frame.grid(row=2, column=0, sticky="nsew", padx=14, pady=8)
        history_frame.grid_rowconfigure(1, weight=1)
        history_frame.grid_columnconfigure(0, weight=1)

        hist_title = ctk.CTkLabel(history_frame, text="Assessment History", font=ctk.CTkFont(size=14, weight="bold"))
        hist_title.grid(row=0, column=0, sticky="w", pady=(0, 4))

        self.history_scroll = ctk.CTkScrollableFrame(history_frame, corner_radius=6)
        self.history_scroll.grid(row=1, column=0, sticky="nsew")

        # Action Buttons
        actions_bar = ctk.CTkFrame(self.detail_panel, fg_color="transparent")
        actions_bar.grid(row=3, column=0, sticky="ew", padx=14, pady=(6, 14))

        self.btn_start_self = ctk.CTkButton(
            actions_bar,
            text="📝 Start Self-Report (CAARS-S:L)",
            height=36,
            fg_color="#3b82f6",
            hover_color="#1d4ed8",
            state="disabled",
            command=lambda: self._trigger_assessment("self")
        )
        self.btn_start_self.pack(side="left", padx=(0, 8))

        self.btn_start_obs = ctk.CTkButton(
            actions_bar,
            text="👥 Start Observer Report (CAARS-O:L)",
            height=36,
            fg_color="#10b981",
            hover_color="#047857",
            state="disabled",
            command=lambda: self._trigger_assessment("observer")
        )
        self.btn_start_obs.pack(side="left")

    def refresh_patients(self):
        self.all_patients = self.db.list_patients()
        self.filter_patients()

    def filter_patients(self):
        # Clear list
        for w in self.patient_scroll.winfo_children():
            w.destroy()

        query = self.search_var.get().lower().strip()
        filtered = [
            p for p in self.all_patients
            if query in p["first_name"].lower() or
               query in p["last_name"].lower() or
               query in p["mrn"].lower()
        ]

        if not filtered:
            lbl = ctk.CTkLabel(self.patient_scroll, text="No patients found.", text_color="gray")
            lbl.pack(pady=20)
            return

        for p in filtered:
            is_active = p["id"] == self.selected_patient_id
            btn = ctk.CTkButton(
                self.patient_scroll,
                text=f"{p['last_name']}, {p['first_name']}\nMRN: {p['mrn']} | {p['gender']}",
                anchor="w",
                height=48,
                corner_radius=6,
                fg_color=("#2563eb", "#1d4ed8") if is_active else ("#ffffff", "#1e293b"),
                text_color=("#ffffff", "#ffffff") if is_active else ("#1e293b", "#f8fafc"),
                hover_color=("#3b82f6", "#334155"),
                command=lambda pid=p["id"]: self.select_patient(pid)
            )
            btn.pack(fill="x", pady=3)

    def select_patient(self, patient_id: int):
        self.selected_patient_id = patient_id
        patient = self.db.get_patient(patient_id)
        if not patient:
            return

        self.filter_patients()

        # Calculate age
        age_bracket = NormsEngine.get_age_bracket(patient["dob"])
        dob = patient["dob"]

        self.detail_title.configure(text=f"{patient['first_name']} {patient['last_name']}")
        self.info_label.configure(
            text=f"MRN: {patient['mrn']}  |  DOB: {dob}  |  Gender: {patient['gender']}  |  Norm Bracket: {age_bracket}\n"
                 f"Clinical Notes: {patient['notes'] or 'None recorded.'}"
        )

        self.btn_start_self.configure(state="normal")
        self.btn_start_obs.configure(state="normal")

        # Load history
        self._load_assessment_history(patient_id)

    def _load_assessment_history(self, patient_id: int):
        for w in self.history_scroll.winfo_children():
            w.destroy()

        assessments = self.db.list_assessments_for_patient(patient_id)
        if not assessments:
            lbl = ctk.CTkLabel(self.history_scroll, text="No completed assessments yet.", text_color="gray")
            lbl.pack(pady=20)
            return

        for a in assessments:
            card = ctk.CTkFrame(self.history_scroll, corner_radius=6)
            card.pack(fill="x", pady=4, padx=2)
            card.grid_columnconfigure(0, weight=1)

            ftype_label = "Self-Report (CAARS-S)" if a["form_type"] == "self" else f"Observer ({a['relationship'] or 'Other'})"
            flag_text = "⚠️ Inconsistent" if a["inconsistency_flag"] else "✓ Valid"
            flag_color = "#ef4444" if a["inconsistency_flag"] else "#22c55e"

            info = ctk.CTkLabel(
                card,
                text=f"{a['administered_date']} — {ftype_label}\nRater: {a['rater_name']}  |  Validity: {flag_text}",
                font=ctk.CTkFont(size=12),
                justify="left",
                anchor="w"
            )
            info.grid(row=0, column=0, padx=10, pady=8, sticky="w")

            view_btn = ctk.CTkButton(
                card,
                text="View Report",
                width=90,
                height=28,
                command=lambda aid=a["id"]: self.on_view_report(aid)
            )
            view_btn.grid(row=0, column=1, padx=10, pady=8, sticky="e")

    def _trigger_assessment(self, form_type: str):
        if self.selected_patient_id:
            self.on_start_assessment(self.selected_patient_id, form_type)

    def _open_new_patient_dialog(self):
        dialog = ctk.CTkToplevel(self)
        dialog.title("Add New Patient")
        dialog.geometry("420x450")
        dialog.grab_set()
        dialog.resizable(False, False)

        ctk.CTkLabel(dialog, text="Register New Patient", font=ctk.CTkFont(size=16, weight="bold")).pack(pady=(16, 12))

        form = ctk.CTkFrame(dialog, fg_color="transparent")
        form.pack(fill="both", expand=True, padx=24)

        ctk.CTkLabel(form, text="Medical Record Number (MRN)*:").pack(anchor="w", pady=(4, 1))
        mrn_entry = ctk.CTkEntry(form)
        mrn_entry.pack(fill="x", pady=(0, 6))

        ctk.CTkLabel(form, text="First Name*:").pack(anchor="w", pady=(4, 1))
        first_entry = ctk.CTkEntry(form)
        first_entry.pack(fill="x", pady=(0, 6))

        ctk.CTkLabel(form, text="Last Name*:").pack(anchor="w", pady=(4, 1))
        last_entry = ctk.CTkEntry(form)
        last_entry.pack(fill="x", pady=(0, 6))

        ctk.CTkLabel(form, text="Date of Birth (YYYY-MM-DD)*:").pack(anchor="w", pady=(4, 1))
        dob_entry = ctk.CTkEntry(form, placeholder_text="e.g. 1994-08-25")
        dob_entry.pack(fill="x", pady=(0, 6))

        ctk.CTkLabel(form, text="Biological Gender*:").pack(anchor="w", pady=(4, 1))
        gender_seg = ctk.CTkSegmentedButton(form, values=["Male", "Female"])
        gender_seg.set("Male")
        gender_seg.pack(fill="x", pady=(0, 6))

        ctk.CTkLabel(form, text="Clinical Notes:").pack(anchor="w", pady=(4, 1))
        notes_entry = ctk.CTkEntry(form, placeholder_text="Referral reason, history...")
        notes_entry.pack(fill="x", pady=(0, 10))

        def save():
            mrn = mrn_entry.get().strip()
            fn = first_entry.get().strip()
            ln = last_entry.get().strip()
            dob = dob_entry.get().strip()
            gender = gender_seg.get()
            notes = notes_entry.get().strip()

            if not mrn or not fn or not ln or not dob:
                messagebox.showerror("Validation Error", "Please fill in all required fields marked with *.")
                return

            try:
                datetime.strptime(dob, "%Y-%m-%d")
            except ValueError:
                messagebox.showerror("Invalid Date", "Date of Birth must be in YYYY-MM-DD format.")
                return

            if self.db.get_patient_by_mrn(mrn):
                messagebox.showerror("Duplicate MRN", f"A patient with MRN '{mrn}' already exists.")
                return

            new_id = self.db.create_patient(mrn, fn, ln, dob, gender, notes)
            dialog.destroy()
            self.refresh_patients()
            self.select_patient(new_id)

        ctk.CTkButton(dialog, text="Save Patient", height=34, command=save).pack(pady=(0, 16), padx=24, fill="x")
