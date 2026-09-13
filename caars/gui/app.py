"""
Main Window Controller for the CAARS Offline Desktop Application.
Manages application lifecycle, sidebar navigation, view routing, and theme switching.
"""

from typing import Optional
import customtkinter as ctk

from caars.database.db import DatabaseManager
from caars.engine.scoring import ScoringEngine
from caars.gui.views.dashboard_view import DashboardView
from caars.gui.views.assessment_view import AssessmentView
from caars.gui.views.report_view import ReportView

class CAARSApp(ctk.CTk):
    def __init__(self, db_path: Optional[str] = None):
        super().__init__()

        # Window configuration
        self.title("CAARS Adult ADHD Assessment & Scoring System (Offline)")
        self.geometry("1180x760")
        self.minsize(980, 640)

        ctk.set_appearance_mode("Dark")
        ctk.set_default_color_theme("blue")

        # Initialize engines
        self.db = DatabaseManager(db_path=db_path)
        self.engine = ScoringEngine()

        # Layout: Sidebar (col 0) + Main View Container (col 1)
        self.grid_columnconfigure(0, weight=0)
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)

        self._build_sidebar()

        # Main content view frame
        self.content_container = ctk.CTkFrame(self, fg_color="transparent")
        self.content_container.grid(row=0, column=1, sticky="nsew", padx=4, pady=4)
        self.content_container.grid_rowconfigure(0, weight=1)
        self.content_container.grid_columnconfigure(0, weight=1)

        self.current_view = None
        self.show_dashboard()

    def _build_sidebar(self):
        sidebar = ctk.CTkFrame(self, width=220, corner_radius=0)
        sidebar.grid(row=0, column=0, sticky="nsew")
        sidebar.grid_rowconfigure(4, weight=1)

        # Brand / App Title
        logo_lbl = ctk.CTkLabel(
            sidebar,
            text="🧠 CAARS",
            font=ctk.CTkFont(size=22, weight="bold")
        )
        logo_lbl.grid(row=0, column=0, padx=20, pady=(20, 2), sticky="w")

        sub_lbl = ctk.CTkLabel(
            sidebar,
            text="Adult ADHD Psychometrics",
            font=ctk.CTkFont(size=11),
            text_color="gray"
        )
        sub_lbl.grid(row=1, column=0, padx=20, pady=(0, 20), sticky="w")

        # Nav Buttons
        self.btn_nav_dashboard = ctk.CTkButton(
            sidebar,
            text="👥 Patient Roster",
            height=38,
            anchor="w",
            font=ctk.CTkFont(size=13, weight="bold"),
            command=self.show_dashboard
        )
        self.btn_nav_dashboard.grid(row=2, column=0, padx=14, pady=6, sticky="ew")

        # Offline & System Info (pinned bottom)
        bottom_frame = ctk.CTkFrame(sidebar, fg_color="transparent")
        bottom_frame.grid(row=5, column=0, padx=14, pady=16, sticky="ew")

        ctk.CTkLabel(bottom_frame, text="Appearance Mode:", font=ctk.CTkFont(size=11)).pack(anchor="w", pady=(0, 2))
        self.theme_menu = ctk.CTkOptionMenu(
            bottom_frame,
            values=["Dark", "Light", "System"],
            height=28,
            command=self._change_theme
        )
        self.theme_menu.set("Dark")
        self.theme_menu.pack(fill="x", pady=(0, 12))

        status_lbl = ctk.CTkLabel(
            bottom_frame,
            text="🟢 100% Offline Mode\nSQLite Local Database",
            font=ctk.CTkFont(size=10),
            text_color="gray",
            justify="left"
        )
        status_lbl.pack(anchor="w")

    def _change_theme(self, mode: str):
        ctk.set_appearance_mode(mode)
        # If currently showing report view, trigger redraw of matplotlib chart
        if isinstance(self.current_view, ReportView):
            self.show_report(self.current_view.assessment_id)

    def _set_active_nav(self, active_btn):
        for btn in [self.btn_nav_dashboard]:
            if btn == active_btn:
                btn.configure(fg_color=("#2563eb", "#1d4ed8"))
            else:
                btn.configure(fg_color="transparent")

    def _switch_view(self, view_widget):
        if self.current_view is not None:
            self.current_view.destroy()
        self.current_view = view_widget
        self.current_view.grid(row=0, column=0, sticky="nsew")

    def show_dashboard(self):
        self._set_active_nav(self.btn_nav_dashboard)
        view = DashboardView(
            master=self.content_container,
            db=self.db,
            on_start_assessment=self.start_assessment,
            on_view_report=self.show_report
        )
        self._switch_view(view)

    def start_assessment(self, patient_id: int, form_type: str):
        view = AssessmentView(
            master=self.content_container,
            db=self.db,
            engine=self.engine,
            patient_id=patient_id,
            form_type=form_type,
            on_completed=self.show_report,
            on_cancel=self.show_dashboard
        )
        self._switch_view(view)

    def show_report(self, assessment_id: int):
        view = ReportView(
            master=self.content_container,
            db=self.db,
            assessment_id=assessment_id,
            on_back=self.show_dashboard
        )
        self._switch_view(view)
