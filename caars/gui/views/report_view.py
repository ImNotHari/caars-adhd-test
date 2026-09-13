"""
Clinical Results & Psychometric Profile Viewer.
Renders demographic summary, validity indicators, embedded T-score chart,
full subscale breakdown table, and 1-click clinical PDF export.
"""

import os
import sys
from typing import Callable, Optional, List, Dict, Any
from tkinter import filedialog, messagebox
import customtkinter as ctk

from caars.database.db import DatabaseManager
from caars.gui.components.chart_canvas import TScoreChart
from caars.reporting.pdf_builder import PDFReportBuilder

CLASSIFICATION_COLORS = {
    "Very Elevated": ("#ef4444", "#991b1b"),
    "Elevated":      ("#f59e0b", "#b45309"),
    "Borderline":    ("#3b82f6", "#1d4ed8"),
    "Average":       ("#10b981", "#047857"),
}

class ReportView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager,
                 assessment_id: int,
                 on_back: Callable[[], None],
                 **kwargs):
        super().__init__(master, **kwargs)
        self.db = db
        self.assessment_id = assessment_id
        self.on_back = on_back
        self.pdf_builder = PDFReportBuilder()

        self.assessment = self.db.get_assessment(assessment_id)
        if not self.assessment:
            raise ValueError(f"Assessment {assessment_id} not found.")

        # Find complementary assessment for multi-informant comparison if available
        self.other_assessment = self._find_complementary_assessment()

        self.grid_rowconfigure(1, weight=1)
        self.grid_columnconfigure(0, weight=1)

        self._build_header()
        self._build_body()

    def _find_complementary_assessment(self) -> Optional[Dict[str, Any]]:
        """
        If current is self-report, find most recent observer report for this patient (or vice versa).
        """
        all_for_pt = self.db.list_assessments_for_patient(self.assessment["patient_id"])
        target_type = "observer" if self.assessment["form_type"] == "self" else "self"
        for a in all_for_pt:
            if a["id"] != self.assessment_id and a["form_type"] == target_type and a["completed"]:
                return self.db.get_assessment(a["id"])
        return None

    def _build_header(self):
        header = ctk.CTkFrame(self, corner_radius=8)
        header.grid(row=0, column=0, sticky="ew", padx=14, pady=(12, 6))
        header.grid_columnconfigure(1, weight=1)

        back_btn = ctk.CTkButton(
            header,
            text="◀ Back to Dashboard",
            width=140,
            command=self.on_back
        )
        back_btn.grid(row=0, column=0, padx=12, pady=10, sticky="w")

        p_name = f"{self.assessment['first_name']} {self.assessment['last_name']}"
        title_lbl = ctk.CTkLabel(
            header,
            text=f"CAARS Clinical Evaluation: {p_name}",
            font=ctk.CTkFont(size=17, weight="bold")
        )
        title_lbl.grid(row=0, column=1, padx=10, pady=10, sticky="w")

        # Right side: Export PDF & Metadata
        actions_frame = ctk.CTkFrame(header, fg_color="transparent")
        actions_frame.grid(row=0, column=2, padx=12, pady=10, sticky="e")

        export_btn = ctk.CTkButton(
            actions_frame,
            text="📄 Export PDF Report",
            fg_color="#10b981",
            hover_color="#047857",
            font=ctk.CTkFont(size=12, weight="bold"),
            height=32,
            command=self.export_pdf
        )
        export_btn.pack(side="right")

    def _build_body(self):
        scroll = ctk.CTkScrollableFrame(self, corner_radius=8)
        scroll.grid(row=1, column=0, sticky="nsew", padx=14, pady=(4, 12))
        scroll.grid_columnconfigure(0, weight=1)

        # Meta Card
        meta_card = ctk.CTkFrame(scroll, fg_color=("gray90", "gray20"), corner_radius=6)
        meta_card.pack(fill="x", pady=(0, 6), padx=4)
        form_label = "Self-Report (CAARS-S:L)" if self.assessment["form_type"] == "self" else f"Observer Report ({self.assessment['relationship'] or 'Other'})"
        meta_text = (
            f"MRN: {self.assessment['mrn']}  |  Form: {form_label}  |  "
            f"Rater: {self.assessment['rater_name']}  |  Administered: {self.assessment['administered_date']}"
        )
        ctk.CTkLabel(meta_card, text=meta_text, font=ctk.CTkFont(size=12)).pack(anchor="w", padx=12, pady=8)

        # 1. Validity Indicator Card
        self._build_validity_banner(scroll)

        # 2. Embedded T-Score Chart
        chart_card = ctk.CTkFrame(scroll, corner_radius=8)
        chart_card.pack(fill="x", pady=8, padx=4)

        ctk.CTkLabel(
            chart_card,
            text="Standardized T-Score Profile Curve",
            font=ctk.CTkFont(size=14, weight="bold")
        ).pack(anchor="w", padx=14, pady=(10, 4))

        chart = TScoreChart(chart_card)
        chart.pack(fill="x", padx=10, pady=(0, 10))

        obs_scores = self.other_assessment["scores"] if self.other_assessment else None
        chart.render_profile(
            scores=self.assessment["scores"],
            observer_scores=obs_scores,
            is_dark=ctk.get_appearance_mode() == "Dark"
        )

        # 3. Subscale Scores Table
        self._build_scores_table(scroll)

        # 4. Multi-Informant Summary (if available)
        if self.other_assessment:
            self._build_multi_informant_comparison(scroll)

    def _build_validity_banner(self, parent):
        flag = bool(self.assessment["inconsistency_flag"])
        score = self.assessment["inconsistency_score"]

        banner = ctk.CTkFrame(
            parent,
            corner_radius=8,
            fg_color=("#fee2e2", "#450a0a") if flag else ("#dcfce7", "#052e16")
        )
        banner.pack(fill="x", pady=6, padx=4)

        icon = "⚠️" if flag else "✓"
        title = "INCONSISTENCY ALERT: Potential Response Distortion" if flag else "PROTOCOL VALIDITY: Acceptable Internal Consistency"
        body = (
            f"Inconsistency Index score is {score} (Cutoff ≥ 8). High discordance between similar question pairs. "
            "Interpret clinical elevations with caution."
            if flag else
            f"Inconsistency Index score is {score} (within normal limits < 8). Response pattern shows reliable internal consistency."
        )

        text_color = ("#991b1b", "#fca5a5") if flag else ("#166534", "#86efac")

        ctk.CTkLabel(
            banner,
            text=f"{icon} {title}",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=text_color
        ).pack(anchor="w", padx=14, pady=(8, 2))

        ctk.CTkLabel(
            banner,
            text=body,
            font=ctk.CTkFont(size=11),
            text_color=text_color,
            wraplength=750,
            justify="left"
        ).pack(anchor="w", padx=14, pady=(0, 8))

    def _build_scores_table(self, parent):
        card = ctk.CTkFrame(parent, corner_radius=8)
        card.pack(fill="x", pady=8, padx=4)

        ctk.CTkLabel(
            card,
            text="Subscale Scores & Diagnostic Indicators",
            font=ctk.CTkFont(size=14, weight="bold")
        ).pack(anchor="w", padx=14, pady=(12, 6))

        table_frame = ctk.CTkFrame(card, fg_color="transparent")
        table_frame.pack(fill="x", padx=12, pady=(0, 12))
        table_frame.grid_columnconfigure(1, weight=1)

        # Header Row
        headers = [("Code", 50), ("Subscale Name", 280), ("Raw", 60), ("T-Score", 75), ("Percentile", 85), ("Classification", 140)]
        for col_idx, (h_text, width) in enumerate(headers):
            lbl = ctk.CTkLabel(
                table_frame,
                text=h_text,
                font=ctk.CTkFont(size=11, weight="bold"),
                width=width,
                anchor="w" if col_idx < 2 else "center"
            )
            lbl.grid(row=0, column=col_idx, padx=4, pady=4, sticky="w" if col_idx < 2 else "ew")

        # Data Rows
        for row_idx, s in enumerate(self.assessment["scores"], start=1):
            bg = ("#f8fafc", "#1e293b") if row_idx % 2 == 1 else ("transparent", "transparent")
            row_frame = ctk.CTkFrame(table_frame, fg_color=bg, corner_radius=4)
            row_frame.grid(row=row_idx, column=0, columnspan=len(headers), sticky="ew", pady=1)
            row_frame.grid_columnconfigure(1, weight=1)

            ctk.CTkLabel(row_frame, text=s["scale_code"], font=ctk.CTkFont(size=12, weight="bold"), width=50, anchor="w").grid(row=0, column=0, padx=4, pady=6)
            ctk.CTkLabel(row_frame, text=s["scale_name"], font=ctk.CTkFont(size=12), width=280, anchor="w").grid(row=0, column=1, padx=4, pady=6, sticky="w")
            ctk.CTkLabel(row_frame, text=str(s["raw_score"]), font=ctk.CTkFont(size=12), width=60, anchor="center").grid(row=0, column=2, padx=4, pady=6)
            ctk.CTkLabel(row_frame, text=str(s["t_score"]), font=ctk.CTkFont(size=12, weight="bold"), width=75, anchor="center").grid(row=0, column=3, padx=4, pady=6)
            ctk.CTkLabel(row_frame, text=f"{s['percentile']:.1f}%", font=ctk.CTkFont(size=12), width=85, anchor="center").grid(row=0, column=4, padx=4, pady=6)

            badge_colors = CLASSIFICATION_COLORS.get(s["classification"], ("#64748b", "#334155"))
            badge = ctk.CTkLabel(
                row_frame,
                text=s["classification"],
                font=ctk.CTkFont(size=11, weight="bold"),
                fg_color=badge_colors[0],
                text_color="#ffffff",
                corner_radius=4,
                width=125,
                height=22
            )
            badge.grid(row=0, column=5, padx=4, pady=6)

    def _build_multi_informant_comparison(self, parent):
        card = ctk.CTkFrame(parent, corner_radius=8)
        card.pack(fill="x", pady=8, padx=4)

        other_type = "Observer" if self.other_assessment["form_type"] == "observer" else "Self-Report"
        ctk.CTkLabel(
            card,
            text=f"Multi-Informant Discrepancy Analysis (vs. {other_type})",
            font=ctk.CTkFont(size=14, weight="bold")
        ).pack(anchor="w", padx=14, pady=(12, 4))

        ctk.CTkLabel(
            card,
            text="Compares T-Scores between Self-Report and Observer Report. Discrepancies ≥ 10 points (1.0 SD) indicate notable differences in perception.",
            font=ctk.CTkFont(size=11),
            text_color="gray"
        ).pack(anchor="w", padx=14, pady=(0, 8))

        other_scores_map = {s["scale_code"]: s["t_score"] for s in self.other_assessment["scores"]}

        comp_frame = ctk.CTkFrame(card, fg_color="transparent")
        comp_frame.pack(fill="x", padx=12, pady=(0, 12))

        headers = ["Scale", "Self T", "Observer T", "Delta (Δ)", "Clinical Meaning"]
        for col, h in enumerate(headers):
            ctk.CTkLabel(comp_frame, text=h, font=ctk.CTkFont(size=11, weight="bold")).grid(row=0, column=col, padx=8, pady=4)

        for row_idx, s in enumerate(self.assessment["scores"], start=1):
            code = s["scale_code"]
            self_t = s["t_score"] if self.assessment["form_type"] == "self" else other_scores_map.get(code, 0)
            obs_t = other_scores_map.get(code, 0) if self.assessment["form_type"] == "self" else s["t_score"]
            delta = self_t - obs_t

            if abs(delta) >= 10:
                meaning = "Self reports much higher distress" if delta > 0 else "Observer observes greater impairment"
                color = "#f59e0b"
            else:
                meaning = "Good informant convergence"
                color = "#10b981"

            ctk.CTkLabel(comp_frame, text=code, font=ctk.CTkFont(weight="bold")).grid(row=row_idx, column=0, padx=8, pady=3)
            ctk.CTkLabel(comp_frame, text=str(self_t)).grid(row=row_idx, column=1, padx=8, pady=3)
            ctk.CTkLabel(comp_frame, text=str(obs_t)).grid(row=row_idx, column=2, padx=8, pady=3)
            ctk.CTkLabel(comp_frame, text=f"{delta:+d}", font=ctk.CTkFont(weight="bold")).grid(row=row_idx, column=3, padx=8, pady=3)
            ctk.CTkLabel(comp_frame, text=meaning, text_color=color).grid(row=row_idx, column=4, padx=8, pady=3, sticky="w")

    def export_pdf(self):
        default_filename = f"CAARS_Report_{self.assessment['mrn']}_{self.assessment['administered_date']}.pdf"
        file_path = filedialog.asksaveasfilename(
            defaultextension=".pdf",
            filetypes=[("PDF Documents", "*.pdf")],
            initialfile=default_filename,
            title="Save Clinical Evaluation Report PDF"
        )

        if not file_path:
            return

        try:
            generated_path = self.pdf_builder.generate_report(
                assessment=self.assessment,
                output_pdf_path=file_path,
                other_assessment=self.other_assessment
            )

            open_now = messagebox.askyesno(
                "PDF Report Generated",
                f"Clinical PDF report successfully exported to:\n{generated_path}\n\nWould you like to open it now?"
            )
            if open_now:
                if sys.platform.startswith("win"):
                    os.startfile(generated_path)
                elif sys.platform.startswith("darwin"):
                    os.system(f"open '{generated_path}'")
                else:
                    os.system(f"xdg-open '{generated_path}'")

        except Exception as e:
            messagebox.showerror("Export Failed", f"Failed to generate PDF report:\n{str(e)}")
