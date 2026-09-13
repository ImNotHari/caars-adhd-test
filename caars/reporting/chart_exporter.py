"""
High-resolution chart exporter for PDF reports.
Generates print-optimized Matplotlib T-score profile plots.
"""

from typing import List, Dict, Any, Optional
from pathlib import Path
import matplotlib
matplotlib.use("Agg")  # Non-interactive backend for headless rendering
import matplotlib.pyplot as plt

def export_tscore_chart(scores: List[Dict[str, Any]],
                        output_image_path: str | Path,
                        observer_scores: Optional[List[Dict[str, Any]]] = None) -> str:
    """
    Renders a print-ready, high-DPI T-score profile curve on white background.
    Saves to output_image_path and returns the string path.
    """
    fig, ax = plt.subplots(figsize=(7.5, 3.4), dpi=300)

    # Print-friendly colors
    bg_color = "#ffffff"
    text_color = "#1e293b"
    grid_color = "#e2e8f0"

    fig.patch.set_facecolor(bg_color)
    ax.set_facecolor(bg_color)

    scale_codes = [s["scale_code"] for s in scores]
    t_scores_primary = [s["t_score"] for s in scores]

    # Shaded clinical zones
    ax.axhspan(70, 90, color="#fee2e2", alpha=0.6, label="Very Elevated (T ≥ 70)")
    ax.axhspan(65, 70, color="#fef3c7", alpha=0.6, label="Elevated (T 65–69)")
    ax.axhline(70, color="#dc2626", linestyle="--", linewidth=1.0)
    ax.axhline(65, color="#d97706", linestyle="--", linewidth=1.0)
    ax.axhline(50, color="#0284c7", linestyle=":", linewidth=0.9, label="Normative Mean (T = 50)")

    # Plot primary curve (Self-Report or single assessment)
    primary_label = "Self-Report (CAARS-S)" if observer_scores else "Assessment Profile"
    ax.plot(scale_codes, t_scores_primary, marker="o", markersize=6,
            linewidth=2.2, color="#2563eb", label=primary_label)

    # Point annotations
    for x, y in zip(scale_codes, t_scores_primary):
        ax.annotate(f"{y}", (x, y), textcoords="offset points", xytext=(0, 6),
                    ha="center", fontsize=8, fontweight="bold", color="#1d4ed8")

    # Plot observer curve if available
    if observer_scores:
        t_scores_obs = [s["t_score"] for s in observer_scores]
        ax.plot(scale_codes, t_scores_obs, marker="s", markersize=6,
                linewidth=2.0, linestyle="-.", color="#059669", label="Observer Report (CAARS-O)")

        for x, y in zip(scale_codes, t_scores_obs):
            ax.annotate(f"{y}", (x, y), textcoords="offset points", xytext=(0, -11),
                        ha="center", fontsize=8, fontweight="bold", color="#047857")

    ax.set_ylim(30, 90)
    ax.set_ylabel("T-Score (Mean=50, SD=10)", color=text_color, fontsize=9, fontweight="bold")
    ax.set_xlabel("CAARS Subscales (A–H)", color=text_color, fontsize=9, fontweight="bold")
    ax.set_title("Standardized T-Score Profile", color=text_color, fontsize=11, fontweight="bold", pad=10)

    # Styling ticks and spines
    ax.tick_params(colors=text_color, labelsize=8.5)
    ax.grid(True, linestyle="--", alpha=0.7, color=grid_color)
    for spine in ax.spines.values():
        spine.set_color("#cbd5e1")

    ax.legend(loc="lower right", facecolor="#ffffff", edgecolor="#cbd5e1",
              fontsize=7.5, labelcolor=text_color)

    fig.tight_layout()
    output_path = Path(output_image_path)
    fig.savefig(output_path, dpi=300, facecolor=bg_color, bbox_inches="tight")
    plt.close(fig)

    return str(output_path)
