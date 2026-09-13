"""
Clinical PDF Report Builder for CAARS using ReportLab.
Compiles standardized, multi-page psychological evaluation documents.
"""

import tempfile
from pathlib import Path
from typing import Dict, Any, Optional, List
from datetime import datetime

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

from caars.reporting.chart_exporter import export_tscore_chart
from caars.engine.norms import NormsEngine

class NumberedCanvas(canvas.Canvas):
    """
    Two-pass canvas to dynamically compute and print 'Page X of Y' in the footer.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            super().showPage()
        super().save()

    def draw_page_number(self, page_count: int):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))

        # Footer divider line
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(36, 36, 576, 36)

        # Left footer
        self.drawString(36, 24, "CONFIDENTIAL & PRIVILEGED — Psychological Assessment Report (CAARS)")
        # Right footer
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(576, 24, page_text)
        self.restoreState()


class PDFReportBuilder:
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self._setup_custom_styles()

    def _setup_custom_styles(self):
        self.styles.add(ParagraphStyle(
            name="ReportTitle",
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=colors.HexColor("#0f172a")
        ))
        self.styles.add(ParagraphStyle(
            name="ReportSubtitle",
            fontName="Helvetica",
            fontSize=10,
            leading=13,
            textColor=colors.HexColor("#475569")
        ))
        self.styles.add(ParagraphStyle(
            name="SectionHeading",
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=16,
            textColor=colors.HexColor("#1e293b"),
            spaceBefore=10,
            spaceAfter=4
        ))
        self.styles.add(ParagraphStyle(
            name="BodySmall",
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#334155")
        ))
        self.styles.add(ParagraphStyle(
            name="TableCell",
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#1e293b")
        ))
        self.styles.add(ParagraphStyle(
            name="TableHeader",
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#0f172a")
        ))

    def generate_report(self, assessment: Dict[str, Any],
                        output_pdf_path: str | Path,
                        other_assessment: Optional[Dict[str, Any]] = None) -> str:
        """
        Builds the complete multi-page clinical PDF report.
        """
        out_path = Path(output_pdf_path)
        out_path.parent.mkdir(parents=True, exist_ok=True)

        doc = SimpleDocTemplate(
            str(out_path),
            pagesize=letter,
            leftMargin=36,
            rightMargin=36,
            topMargin=36,
            bottomMargin=48
        )

        story = []

        # 1. Header & Title Block
        story.append(Paragraph("CONNERS' ADULT ADHD RATING SCALES (CAARS)", self.styles["ReportTitle"]))
        story.append(Paragraph("Clinical Psychological Evaluation & Quantitative Profile Report", self.styles["ReportSubtitle"]))
        story.append(Spacer(1, 8))
        story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor("#2563eb"), spaceAfter=10))

        # 2. Patient Demographics & Assessment Metadata Table
        dob = assessment.get("dob", "N/A")
        age_bracket = NormsEngine.get_age_bracket(dob) if dob != "N/A" else "N/A"
        form_label = "Self-Report (CAARS-S:L)" if assessment["form_type"] == "self" else f"Observer Report ({assessment.get('relationship', 'Other')})"

        demo_data = [
            [
                Paragraph("<b>Patient Name:</b>", self.styles["TableCell"]),
                Paragraph(f"{assessment['first_name']} {assessment['last_name']}", self.styles["TableCell"]),
                Paragraph("<b>Evaluation Date:</b>", self.styles["TableCell"]),
                Paragraph(str(assessment["administered_date"]), self.styles["TableCell"]),
            ],
            [
                Paragraph("<b>MRN:</b>", self.styles["TableCell"]),
                Paragraph(str(assessment["mrn"]), self.styles["TableCell"]),
                Paragraph("<b>Form Administered:</b>", self.styles["TableCell"]),
                Paragraph(form_label, self.styles["TableCell"]),
            ],
            [
                Paragraph("<b>Date of Birth:</b>", self.styles["TableCell"]),
                Paragraph(f"{dob} (Cohort: {age_bracket})", self.styles["TableCell"]),
                Paragraph("<b>Rater Name:</b>", self.styles["TableCell"]),
                Paragraph(str(assessment["rater_name"]), self.styles["TableCell"]),
            ],
            [
                Paragraph("<b>Biological Gender:</b>", self.styles["TableCell"]),
                Paragraph(str(assessment["gender"]), self.styles["TableCell"]),
                Paragraph("<b>Rater Relationship:</b>", self.styles["TableCell"]),
                Paragraph(str(assessment.get("relationship") or "Self"), self.styles["TableCell"]),
            ]
        ]

        demo_table = Table(demo_data, colWidths=[90, 180, 100, 170])
        demo_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f8fafc")),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ]))
        story.append(demo_table)
        story.append(Spacer(1, 10))

        # 3. Protocol Validity Banner
        flag = bool(assessment["inconsistency_flag"])
        inc_score = assessment["inconsistency_score"]
        validity_bg = colors.HexColor("#fee2e2") if flag else colors.HexColor("#dcfce7")
        validity_border = colors.HexColor("#ef4444") if flag else colors.HexColor("#22c55e")
        validity_title_color = "#991b1b" if flag else "#166534"

        v_title = "⚠️ INCONSISTENCY ALERT: Potential Response Distortion" if flag else "✓ PROTOCOL VALIDITY: Acceptable Internal Consistency"
        v_body = (
            f"The Inconsistency Index score is {inc_score} (Threshold ≥ 8). The respondent gave substantially discordant "
            "ratings to conceptually paired items. Findings should be interpreted with significant clinical caution."
            if flag else
            f"The Inconsistency Index score is {inc_score} (within normal limits < 8). The respondent demonstrated "
            "consistent, reliable answering across paired validation items."
        )

        val_data = [
            [Paragraph(f"<b><font color='{validity_title_color}'>{v_title}</font></b>", self.styles["TableCell"])],
            [Paragraph(v_body, self.styles["BodySmall"])]
        ]
        val_table = Table(val_data, colWidths=[540])
        val_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), validity_bg),
            ("BOX", (0, 0), (-1, -1), 1.0, validity_border),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ]))
        story.append(val_table)
        story.append(Spacer(1, 10))

        # 4. Executive T-Score Profile Plot
        story.append(Paragraph("Standardized T-Score Profile Curve", self.styles["SectionHeading"]))
        story.append(Paragraph(
            "T-Scores are standardized against age- and gender-stratified normative samples (Mean = 50, SD = 10). "
            "Scores between 65–69 indicate elevated symptoms (clinically significant); scores ≥ 70 indicate very elevated symptom severity.",
            self.styles["BodySmall"]
        ))
        story.append(Spacer(1, 6))

        with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp_chart:
            tmp_chart_path = tmp_chart.name

        obs_scores = other_assessment["scores"] if other_assessment else None
        export_tscore_chart(
            scores=assessment["scores"],
            output_image_path=tmp_chart_path,
            observer_scores=obs_scores
        )

        chart_img = Image(tmp_chart_path, width=540, height=245)
        story.append(chart_img)

        # End of Page 1 -> Page Break
        story.append(PageBreak())

        # Page 2: Detailed Scores Table & Diagnostic Interpretation
        story.append(Paragraph("Subscale Scores & Diagnostic Indicators", self.styles["SectionHeading"]))
        story.append(Spacer(1, 4))

        table_rows = [
            [
                Paragraph("Code", self.styles["TableHeader"]),
                Paragraph("Subscale Name", self.styles["TableHeader"]),
                Paragraph("Raw", self.styles["TableHeader"]),
                Paragraph("T-Score", self.styles["TableHeader"]),
                Paragraph("Percentile", self.styles["TableHeader"]),
                Paragraph("Classification", self.styles["TableHeader"])
            ]
        ]

        for s in assessment["scores"]:
            # Color code classification
            cls_text = s["classification"]
            cls_color = "#16a34a"
            if cls_text == "Very Elevated":
                cls_color = "#dc2626"
            elif cls_text == "Elevated":
                cls_color = "#d97706"
            elif cls_text == "Borderline":
                cls_color = "#2563eb"

            table_rows.append([
                Paragraph(f"<b>{s['scale_code']}</b>", self.styles["TableCell"]),
                Paragraph(s["scale_name"], self.styles["TableCell"]),
                Paragraph(str(s["raw_score"]), self.styles["TableCell"]),
                Paragraph(f"<b>{s['t_score']}</b>", self.styles["TableCell"]),
                Paragraph(f"{s['percentile']:.1f}%", self.styles["TableCell"]),
                Paragraph(f"<b><font color='{cls_color}'>{cls_text}</font></b>", self.styles["TableCell"])
            ])

        scores_table = Table(table_rows, colWidths=[40, 210, 45, 60, 65, 120])
        scores_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
            ("TOPPADDING", (0, 0), (-1, -1), 3.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("ALIGN", (2, 0), (4, -1), "CENTER"),
        ]))
        story.append(scores_table)
        story.append(Spacer(1, 10))

        # Multi-Informant Discrepancy Table (if present)
        if other_assessment:
            story.append(Paragraph("Multi-Informant Comparison Analysis", self.styles["SectionHeading"]))
            other_scores_map = {s["scale_code"]: s["t_score"] for s in other_assessment["scores"]}

            comp_rows = [
                [
                    Paragraph("Scale", self.styles["TableHeader"]),
                    Paragraph("Self T", self.styles["TableHeader"]),
                    Paragraph("Observer T", self.styles["TableHeader"]),
                    Paragraph("Delta (Δ)", self.styles["TableHeader"]),
                    Paragraph("Clinical Interpretation", self.styles["TableHeader"])
                ]
            ]

            for s in assessment["scores"]:
                code = s["scale_code"]
                self_t = s["t_score"] if assessment["form_type"] == "self" else other_scores_map.get(code, 0)
                obs_t = other_scores_map.get(code, 0) if assessment["form_type"] == "self" else s["t_score"]
                delta = self_t - obs_t

                if abs(delta) >= 10:
                    interp = "Notable discrepancy (Δ ≥ 1.0 SD): " + ("Higher self-reported distress" if delta > 0 else "Observer observes greater impairment")
                    color_tag = "#b45309"
                else:
                    interp = "Good convergence between informants (within 1 SD)"
                    color_tag = "#16a34a"

                comp_rows.append([
                    Paragraph(f"<b>{code}</b>", self.styles["TableCell"]),
                    Paragraph(str(self_t), self.styles["TableCell"]),
                    Paragraph(str(obs_t), self.styles["TableCell"]),
                    Paragraph(f"<b>{delta:+d}</b>", self.styles["TableCell"]),
                    Paragraph(f"<font color='{color_tag}'>{interp}</font>", self.styles["TableCell"])
                ])

            comp_table = Table(comp_rows, colWidths=[45, 55, 65, 55, 320])
            comp_table.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
                ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
            ]))
            story.append(comp_table)
            story.append(Spacer(1, 10))

        # Dynamic Clinical Narrative
        narrative = self._generate_narrative(assessment)
        story.append(Paragraph("Clinical Narrative & Interpretive Summary", self.styles["SectionHeading"]))
        story.append(Paragraph(narrative, self.styles["BodySmall"]))
        story.append(Spacer(1, 14))

        # Clinician Sign-off Block
        sign_block = [
            [
                Paragraph("<b>Evaluating Clinician:</b> ___________________________________", self.styles["TableCell"]),
                Paragraph("<b>Date:</b> ____________________", self.styles["TableCell"]),
            ],
            [
                Paragraph("<b>License / Credentials:</b> ________________________________", self.styles["TableCell"]),
                Paragraph("<b>Signature:</b> _________________", self.styles["TableCell"]),
            ]
        ]
        sign_table = Table(sign_block, colWidths=[360, 180])
        sign_table.setStyle(TableStyle([
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ]))

        disclaimer = Paragraph(
            "<i><b>Notice:</b> The Conners' Adult ADHD Rating Scales (CAARS) is a norm-referenced behavioral rating instrument. "
            "It is designed to inform clinical judgment and must be integrated with clinical history, developmental records, "
            "and functional impairment assessments. This report alone does not constitute a definitive medical diagnosis.</i>",
            self.styles["BodySmall"]
        )

        story.append(KeepTogether([sign_table, Spacer(1, 10), disclaimer]))

        # Build Document
        doc.build(story, canvasmaker=NumberedCanvas)

        # Cleanup temporary chart
        try:
            Path(tmp_chart_path).unlink(missing_ok=True)
        except Exception:
            pass

        return str(out_path)

    def _generate_narrative(self, assessment: Dict[str, Any]) -> str:
        """
        Dynamically synthesizes a professional clinical narrative based on scale scores.
        """
        scores_by_code = {s["scale_code"]: s for s in assessment["scores"]}

        elevated_scales = [
            s["scale_name"] for s in assessment["scores"]
            if s["t_score"] >= 65
        ]

        h_score = scores_by_code.get("H", {}).get("t_score", 50)
        h_class = scores_by_code.get("H", {}).get("classification", "Average")

        paragraphs = []

        if elevated_scales:
            scales_list = ", ".join(elevated_scales)
            paragraphs.append(
                f"The assessment protocol reveals clinically significant elevations (T ≥ 65) on the following scales: "
                f"<b>{scales_list}</b>. "
            )
        else:
            paragraphs.append(
                "All administered subscale scores fall within the normative/average range (T < 65). "
                "The respondent does not endorse pervasive or clinically elevated ADHD symptomology on this rating scale. "
            )

        if h_score >= 65:
            paragraphs.append(
                f"Notably, the <b>ADHD Index (Scale H)</b> is {h_class} (T = {h_score}), which strongly suggests that the respondent's "
                "overall response profile closely aligns with adults clinically diagnosed with ADHD. "
            )
        else:
            paragraphs.append(
                f"The <b>ADHD Index (Scale H)</b> is {h_class} (T = {h_score}), indicating an overall response pattern consistent with non-clinical norms. "
            )

        inattention_elevated = scores_by_code.get("A", {}).get("t_score", 0) >= 65 or scores_by_code.get("E", {}).get("t_score", 0) >= 65
        hyperactivity_elevated = scores_by_code.get("B", {}).get("t_score", 0) >= 65 or scores_by_code.get("F", {}).get("t_score", 0) >= 65

        if inattention_elevated and hyperactivity_elevated:
            paragraphs.append("The profile displays a combined presentation with notable deficits in both attentional regulation and motoric/impulsive control.")
        elif inattention_elevated:
            paragraphs.append("The profile predominantly features inattentive and executive dysfunction symptoms with relatively milder hyperactivity.")
        elif hyperactivity_elevated:
            paragraphs.append("The profile predominantly features hyperactive, restless, and impulsive behaviors with milder attentional complaints.")

        return " ".join(paragraphs)
