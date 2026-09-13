"""
Embedded Matplotlib T-score profile chart for CustomTkinter.
Supports single assessment rendering and multi-informant (Self vs. Observer) overlays.
"""

from typing import List, Dict, Any, Optional
import customtkinter as ctk
import matplotlib
matplotlib.use("TkAgg")
from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class TScoreChart(ctk.CTkFrame):
    def __init__(self, master, **kwargs):
        super().__init__(master, **kwargs)
        self.figure = Figure(figsize=(8.5, 4.2), dpi=100)
        self.canvas = FigureCanvasTkAgg(self.figure, master=self)
        self.canvas_widget = self.canvas.get_tk_widget()
        self.canvas_widget.pack(fill="both", expand=True, padx=5, pady=5)

    def render_profile(self, scores: List[Dict[str, Any]],
                       observer_scores: Optional[List[Dict[str, Any]]] = None,
                       is_dark: bool = True):
        """
        Render T-score profile with shaded cutoffs (65 Elevated, 70 Very Elevated).
        If observer_scores is provided, plots both curves for comparison.
        """
        self.figure.clear()
        ax = self.figure.add_subplot(111)

        # Dark/Light color scheme
        bg_color = "#2b2b2b" if is_dark else "#f9f9f9"
        text_color = "#e0e0e0" if is_dark else "#222222"
        grid_color = "#444444" if is_dark else "#d0d0d0"

        self.figure.patch.set_facecolor(bg_color)
        ax.set_facecolor(bg_color)

        scale_codes = [s["scale_code"] for s in scores]
        t_scores_self = [s["t_score"] for s in scores]

        # Shaded clinical zones
        ax.axhspan(70, 90, color="#d9534f", alpha=0.22, label="Very Elevated (T ≥ 70)")
        ax.axhspan(65, 70, color="#f0ad4e", alpha=0.25, label="Elevated (T 65–69)")
        ax.axhline(65, color="#f0ad4e", linestyle="--", linewidth=1.2)
        ax.axhline(70, color="#d9534f", linestyle="--", linewidth=1.2)
        ax.axhline(50, color="#5bc0de", linestyle=":", linewidth=1.0, label="Normative Mean (T = 50)")

        # Plot Primary Profile (Self or sole assessment)
        line_color = "#3b82f6" if is_dark else "#1d4ed8"
        ax.plot(scale_codes, t_scores_self, marker="o", markersize=7,
                linewidth=2.5, color=line_color, label="Self-Report (CAARS-S)")

        # Annotate points with T-scores
        for x, y in zip(scale_codes, t_scores_self):
            ax.annotate(f"{y}", (x, y), textcoords="offset points", xytext=(0, 7),
                        ha="center", fontsize=8.5, fontweight="bold", color=text_color)

        # Plot Observer Profile if provided
        if observer_scores:
            t_scores_obs = [s["t_score"] for s in observer_scores]
            obs_color = "#10b981" if is_dark else "#047857"
            ax.plot(scale_codes, t_scores_obs, marker="s", markersize=7,
                    linewidth=2.2, linestyle="-.", color=obs_color, label="Observer (CAARS-O)")

            for x, y in zip(scale_codes, t_scores_obs):
                ax.annotate(f"{y}", (x, y), textcoords="offset points", xytext=(0, -13),
                            ha="center", fontsize=8.5, fontweight="bold", color=obs_color)

        ax.set_ylim(30, 90)
        ax.set_ylabel("T-Score (Mean=50, SD=10)", color=text_color, fontsize=10, fontweight="bold")
        ax.set_xlabel("CAARS Subscales (A–H)", color=text_color, fontsize=10, fontweight="bold")
        ax.set_title("CAARS Clinical Profile Graph", color=text_color, fontsize=12, fontweight="bold", pad=12)

        # Ticks and Grid
        ax.tick_params(colors=text_color, labelsize=9.5)
        ax.grid(True, linestyle="--", alpha=0.5, color=grid_color)

        for spine in ax.spines.values():
            spine.set_color(grid_color)

        # Legend
        ax.legend(loc="lower right", facecolor=bg_color, edgecolor=grid_color,
                  fontsize=8.5, labelcolor=text_color)

        self.figure.tight_layout()
        self.canvas.draw()
