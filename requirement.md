# CAARS Adult ADHD Assessment Web App

## Software Requirements Specification (MVP)

**Version:** 2.1.0  
**Status:** Approved Specification  
**Architecture:** Pure Client-Side Static Web Application  
**Execution Environment:** 100% Offline / Standalone Browser Execution  
**Languages Supported:** English (Default) & Malayalam (മലയാളം)

---

## 1. Executive Summary

The CAARS Web Application administers the 66-item CAARS questionnaire (Self-Report and Observer forms), computes raw subscale scores, standardizes them into normative T-scores (stratified by gender, age, and form), validates protocol integrity via the Inconsistency Index, and presents an interactive psychometric profile. It provides complete bilingual capability (English and Malayalam) with live, non-destructive language switching. No backend, no database, no external APIs—purely client-side, 100% offline operation.

---

## 2. System Constraints

| Constraint              | Requirement                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Zero Network**        | All computations, rendering, and reporting strictly client-side. Zero HTTP/HTTPS requests. No external APIs or CDNs. Verified with browser network disabled.                           |
| **No Backend**          | Pure static files (HTML5 / CSS / JavaScript). No Node, Python, PHP, or backend process. No database (SQLite, IndexedDB, WebSQL). Runnable by opening index.html directly in a browser. |
| **No Framework**        | Vanilla HTML5, CSS, and JavaScript only. No React, Vue, Angular, Tailwind, Bootstrap, or CDN dependencies.                                                                             |
| **System Fonts**        | Use native system fonts only. No Google Fonts or font CDNs. Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Malayalam", "Manjari", sans-serif`.        |
| **No EHR**              | No patient rosters, MRNs, longitudinal tracking, or clinical notes. Setup → Questionnaire → Validation → Report only.                                                                  |
| **No Data Persistence** | Assessment responses NOT stored in localStorage, sessionStorage, IndexedDB, cookies, or URL params. Preferences only: `caars_theme` (Light/Dark) and `caars_lang` (en/ml).            |

---

## 3. 66-Item Verified Structure

**Total Items:** Exactly 66 (Items 1–66). Dual-form wording for Self-Report (first-person) and Observer (third-person), fully localized in English and Malayalam:
- `text_self`: English Self-Report prompt
- `text_observer`: English Observer-Report prompt
- `text_self_ml`: Malayalam Self-Report prompt (മലയാളം സ്വയം വിലയിരുത്തൽ)
- `text_observer_ml`: Malayalam Observer-Report prompt (മലയാളം നിരീക്ഷക വിലയിരുത്തൽ)

| Scale | Subscale Name                    | Count | Item Indices                                 |
| ----- | -------------------------------- | ----- | -------------------------------------------- |
| A     | Inattention / Memory             | 12    | 1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45  |
| B     | Hyperactivity / Restlessness     | 12    | 2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46 |
| C     | Impulsivity / Emotional Lability | 12    | 3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47 |
| D     | Problems with Self-Concept       | 6     | 4, 8, 12, 16, 20, 24                         |
| E     | DSM-IV Inattentive               | 9     | 5, 9, 13, 17, 21, 25, 29, 33, 37             |
| F     | DSM-IV Hyperactive-Impulsive     | 9     | 2, 6, 7, 10, 14, 18, 22, 26, 30              |
| G     | DSM-IV Total ADHD (E + F)        | 18    | E + F combined                               |
| H     | CAARS ADHD Index                 | 12    | 1, 7, 11, 14, 17, 27, 31, 35, 38, 43, 46, 50 |

**Inconsistency Index Pairs** (8 standardized item-agreement pairs):  
`(1, 28), (5, 42), (9, 36), (14, 52), (18, 61), (22, 48), (25, 59), (31, 64)`

---

## 4. Formal Scoring Pipeline

### Step 1: Raw Score Summation

Responses are 4-point Likert (0–3):

- `0`: Not at all, never / ഒട്ടുമില്ല, ഒരിക്കലുമില്ല
- `1`: Just a little, once in a while / കുറച്ച് മാത്രം, വല്ലപ്പോഴും
- `2`: Pretty much, often / കാര്യമായിട്ടുണ്ട്, പലപ്പോഴും
- `3`: Very much, very frequently / വളരെ കൂടുതൽ, നിരന്തരം

Each scale raw score = sum of its items. Scale G = Scale E + Scale F. Language selection does not affect numerical scoring or normative standardization.

### Step 2: Protocol Validity (Inconsistency Index)

`INC = sum of absolute differences across 8 item pairs`

- **INC ≤ 7:** Valid Protocol (acceptable internal consistency)
- **INC ≥ 8:** Inconsistent / Invalid (possible carelessness or distortion)

### Step 3: Normative Standardization (Raw → T-Score)

Lookup key: `(Form, Gender, AgeBracket, ScaleCode)`

- **Form:** `CAARS-S:L` (Self-Report) or `CAARS-O:L` (Observer)
- **Gender:** Male, Female
- **Age Bracket:** 18–29, 30–49, 50+
- **Scale Codes:** A–H

**T-Score Output:** Integer, mean 50, SD 10, clamped [30, 90].

### Step 4: Percentile Calculation

`Percentile = Φ((T − 50) / 10) × 100`

Formatted to 1 decimal place, clamped [0.1%, 99.9%].

### Step 5: Clinical Classification

- **T ≥ 70:** Very Elevated (≥ 2.0 SD, top ~2%)
- **T ∈ [65, 69]:** Elevated (~1.5–1.9 SD, top ~7%)
- **T ∈ [60, 64]:** Borderline (~1.0–1.4 SD)
- **T < 60:** Average (< 1.0 SD)

---

## 5. Incomplete Protocol Policy

**No invented prorating or score estimation.** If any item is unanswered, the assessment is classified as **Incomplete** and **Unscorable**. Scoring is blocked until all 66 items have a valid response (0, 1, 2, or 3). The UI review step detects and lists all missing items with jump links to complete them.

---

## 6. Workflow Stages

### Stage 1: Protocol Setup

- Header controls: Theme toggle (Dark/Light) and Language switch ([ EN | മലയാളം ])
- Form selection (Self vs. Observer)
- Gender (Male/Female)
- Age Bracket (18–29, 30–49, 50+)
- Optional Rater Label
- Display offline notice and Likert scale instructions in selected language

### Stage 2: Survey Administration

- 66 items across 7 sections (6 sections × 10 items, 1 section × 6 items)
- Each item: Q-index (Q01–Q66), localized question text, 4 localized Likert options
- Non-destructive language toggle: switching language re-renders question prompts immediately without wiping active selections (state.responses preserved)
- Progress bar and counter (X of 66 Answered / X / 66 പൂർത്തിയായി)
- Optional demo pre-fill shortcut for testing

### Stage 3: Validation & Review

- Completeness check
- If items missing: localized warning message and list of unanswered items with clickable jump links
- Scoring button disabled until all 66 items answered

### Stage 4: Assessment Report

- Metadata header: form type, engine version, gender/age stratification, formatted date
- Protocol validity banner: Inconsistency Index score and interpretation
- Primary Clinical Diagnostic Score Cards: Large hero displays for core indices (Scales H, G, E, F) with prominent 3.5rem standard T-scores, raw scores, and localized classification tier badges
- Subscale summary table: Scale Code, Subscale Description, Raw Score, Standard T, Classification Badge
- Medical disclaimer: localized DSM-5 compliance notice
- Export Options: 100% offline client-side exports via direct Blob downloads:
  - **Export JSON**: Full assessment record including protocol metadata, validity flags, all 66 raw item responses, and complete subscale findings
  - **Export CSV**: Tabular spreadsheet of all 8 subscales ready for Excel or statistical analysis
- Print / Save as PDF: Dedicated print action with optimized `@media print` multi-page stylesheet
- Start New Assessment button with confirmation modal

---

## 7. Functional Requirements

### FR-1: Protocol Setup & Localization

- Display assessment instructions and Likert scale explanation (0–3) in active language
- Instant language toggle in header (`btn-lang-en`, `btn-lang-ml`) with persisted setting in `caars_lang`
- Form type selector (Self-Report vs. Observer Report)
- Gender selector (Male, Female)
- Age bracket selector (18–29, 30–49, 50+)
- Optional rater label field
- Prominent offline notice in active language

### FR-2: Survey Administration

- 66 items across 7 sections
- Each item: Q-index (Q01–Q66), form- and language-specific text, 4 Likert options with labels
- Header language switch updates all visible questions instantly while preserving entered answers
- Progress header: visual bar, text counter (X of 66), section indicator
- Optional demo pre-fill shortcut for testing

### FR-3: Validation & Review

- Completeness summary at end of survey
- If items missing: localized warning message, list of unanswered items with clickable jump links
- Scoring button disabled until all 66 items answered

### FR-4: Assessment Report

- Metadata header: form type, app version, gender/age stratification, ISO timestamp
- Protocol validity banner: Inconsistency Index score and interpretation
- SVG T-score profile graph with clinical bands, connected line plot, score labels, tooltips
- Subscale summary table: Scale Code, Name, Raw Score, T-Score, Percentile, Clinical Badge
- Medical disclaimer (DSM-5 compliance notice)
- Print button (browser print dialog with optimized CSS)
- Start New Assessment button with confirmation modal

---

## 8. Accessibility (WCAG 2.1 AA)

- Accessible radio groups with `role="radiogroup"` and `aria-labelledby`
- Keyboard navigation: arrow keys within groups, Tab between questions/controls
- Visible focus rings: 2px blue outline (#0284c7) on all interactive elements
- Contrast compliance: ≥ 4.5:1 for normal text, ≥ 3:1 for large text/UI components
- Dynamic `lang` attribute update on root (`<html lang="en">` / `<html lang="ml">`)

---

## 9. Technical Architecture

```
web/
├── index.html              # Semantic HTML5 SPA with language toggle
├── css/
│   └── styles.css          # Vanilla CSS, design tokens, Malayalam typography, print CSS
└── js/
    ├── i18n.js             # Localization dictionaries (en/ml), t() helper, Likert labels
    ├── questions.js        # 66 questions with text_self/observer + text_self_ml/observer_ml
    ├── norms.js            # Normative T-score/percentile lookup (Form × Gender × Age × Scale)
    ├── scoring.js          # Pure deterministic scoring engine (language-independent)
    ├── chart.js            # SVG T-score profile graph generator
    └── app.js              # UI controller, state, non-destructive language toggle, events
```

---

## 10. Browser Refresh & Privacy

- **No data persistence:** Assessment responses and demographics NOT stored in localStorage, sessionStorage, IndexedDB, cookies, or URL params
- **Preferences exception:** Light/Dark preference stored under `caars_theme`; Language preference stored under `caars_lang`
- **Refresh behavior:** Wipes all assessment state. `beforeunload` listener prompts if assessment in progress: _"You have an assessment in progress. If you leave or reload, your responses will be lost."_

---

## 11. Verification Checklist

- [OK] All 66 items present with verified dual-form wording in both English and Malayalam
- [OK] Scale item membership verified (A: 12, B: 12, C: 12, D: 6, E: 9, F: 9, G: 18, H: 12)
- [OK] Inconsistency Index pairs correct: (1,28), (5,42), (9,36), (14,52), (18,61), (22,48), (25,59), (31,64)
- [OK] Normative lookup table complete: all Form × Gender × Age × Scale combinations yield valid T-scores
- [OK] Raw score bounds: min 0, max 3 per item; raw scale sums validated
- [OK] T-score clamping: [30, 90]
- [OK] Percentile rounding: 1 decimal place, [0.1%, 99.9%]
- [OK] Clinical classification boundaries exact: T=59→Average, T=60→Borderline, T=65→Elevated, T=70→Very Elevated
- [OK] Inconsistency cutoff exact: INC≤7→Valid, INC≥8→Inconsistent
- [OK] All 66 items required (no incomplete scoring)
- [OK] Network disabled: no failed requests, no external font fetches
- [OK] Language toggle switches seamlessly between English and Malayalam at all stages
- [OK] Live language switching in Survey stage preserves entered responses without loss
- [OK] localStorage/sessionStorage empty of response data (theme and language preferences only)
- [OK] Print layout clean, no navigation buttons or theme/language controls

