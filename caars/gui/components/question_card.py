"""
Interactive Question Card widget for CAARS assessment taking.
Provides 4 clear Likert option buttons (0, 1, 2, 3) with active highlight.
"""

from typing import Callable, Optional
import customtkinter as ctk

OPTION_LABELS = [
    ("0", "0: Not at all, never"),
    ("1", "1: Once in a while"),
    ("2", "2: Pretty much, often"),
    ("3", "3: Very frequently"),
]

class QuestionCard(ctk.CTkFrame):
    def __init__(self, master, q_id: int, text: str,
                 current_score: Optional[int] = None,
                 on_select: Optional[Callable[[int, int], None]] = None,
                 **kwargs):
        super().__init__(master, corner_radius=8, **kwargs)
        self.q_id = q_id
        self.on_select = on_select
        self.current_score = current_score

        self.grid_columnconfigure(1, weight=1)

        # Badge
        self.badge = ctk.CTkLabel(
            self,
            text=f"Q{q_id:02d}",
            font=ctk.CTkFont(size=12, weight="bold"),
            width=46,
            height=28,
            corner_radius=6,
            fg_color=("#e2e8f0", "#334155"),
            text_color=("#1e293b", "#f8fafc")
        )
        self.badge.grid(row=0, column=0, rowspan=2, padx=(12, 10), pady=10, sticky="nw")

        # Question Text
        self.text_label = ctk.CTkLabel(
            self,
            text=text,
            font=ctk.CTkFont(size=13, weight="normal"),
            wraplength=620,
            justify="left",
            anchor="w"
        )
        self.text_label.grid(row=0, column=1, padx=(0, 10), pady=(10, 4), sticky="w")

        # Options Container
        self.options_frame = ctk.CTkFrame(self, fg_color="transparent")
        self.options_frame.grid(row=1, column=1, padx=(0, 10), pady=(0, 10), sticky="w")

        self.buttons = []
        for val, label in OPTION_LABELS:
            btn = ctk.CTkButton(
                self.options_frame,
                text=label,
                font=ctk.CTkFont(size=11),
                height=26,
                width=135,
                corner_radius=5,
                fg_color=("#3b82f6", "#1d4ed8") if current_score == int(val) else ("#f1f5f9", "#1e293b"),
                text_color=("#ffffff", "#ffffff") if current_score == int(val) else ("#334155", "#cbd5e1"),
                hover_color=("#2563eb", "#1e40af"),
                command=lambda v=int(val): self._select(v)
            )
            btn.pack(side="left", padx=(0, 8))
            self.buttons.append((int(val), btn))

    def _select(self, score: int):
        self.current_score = score
        # Update styling
        for val, btn in self.buttons:
            if val == score:
                btn.configure(
                    fg_color=("#2563eb", "#1d4ed8"),
                    text_color=("#ffffff", "#ffffff")
                )
            else:
                btn.configure(
                    fg_color=("#f1f5f9", "#1e293b"),
                    text_color=("#334155", "#cbd5e1")
                )
        if self.on_select:
            self.on_select(self.q_id, score)

    def set_score(self, score: int):
        self._select(score)
