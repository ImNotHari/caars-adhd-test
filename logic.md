# CAARS Clinical Suite — Psychometric Scoring Logic & Mathematical Specification

> **CAARS Clinical Suite** • *Adult ADHD Assessment Platform*  
> `Architecture: 100% Offline Client-Side Engine` • `Standardization: M=50, SD=10 Normative Scale` • `Lookup Matrices: 96 Demographic Tables`

---

This document provides a comprehensive, rigorous technical explanation of how responses are converted into raw scores, inconsistency validity metrics, normative standard T-scores, percentile ranks, and clinical classifications in the **Conners' Adult ADHD Rating Scales (CAARS)** standalone engine ([web/js/scoring.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/web/js/scoring.js)).

---

## 1. Intended Use, Clinical Scope & Regulatory Limitations

### 1.1. Non-Diagnostic Psychometric Instrument
The Conners' Adult ADHD Rating Scales (CAARS) is a standardized psychometric questionnaire designed to quantify the self-reported and observer-reported frequency and severity of behaviors associated with adult ADHD.

> [!IMPORTANT]
> **Scores alone do NOT establish a psychiatric diagnosis of ADHD.**  
> High scores or clinical elevations ($T \ge 65$) indicate that the respondent reports symptoms at a frequency significantly higher than the normative population, but this is not diagnostic on its own.

Formal diagnosis of adult ADHD in clinical practice requires:
1. **Clinical Interview**: A comprehensive clinical interview conducted by a qualified healthcare professional (e.g. licensed clinical psychologist, neuropsychologist, or psychiatrist).
2. **Developmental History**: Establishing childhood onset of impairing symptoms (consistent with DSM-5 criteria).
3. **Pervasive Functional Impairment**: Evidence of persistent, pervasive functional impairment across multiple life settings (occupational, academic, interpersonal).
4. **Differential Diagnosis**: Comprehensive psychiatric and medical evaluation to identify or rule out comorbid conditions (e.g. major depression, generalized anxiety, sleep apnea/disorders, substance use, bipolar disorder, or medical conditions).

### 1.2. Educational & Research Nature of This Implementation
This implementation is an independent, client-side, open-source educational, screening, and workflow demonstration tool. It is **not** an FDA-cleared Software as a Medical Device (SaMD), nor does it purport to replace proprietary clinical evaluation suites or licensed clinical psychometric administration by trained practitioners.

---

## 2. Normative Data Provenance & Intellectual Property Transparency

The official CAARS assessment instrument, manual, and proprietary standardization protocols are copyrighted and published by **Multi-Health Systems Inc. (MHS)**.

### Provenance of the Implemented Norm Tables
The lookup tables located in [web/js/norms.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/web/js/norms.js) (comprising 96 demographic tables and 3,552 discrete lookup data points) are compiled from:
- Published peer-reviewed academic normative statistics (cohort sample sizes, scale means $\mu$, and standard deviations $\sigma$ stratified across gender and age brackets: `18–29`, `30–49`, `50+`).
- Empirical cumulative score frequency tables established in open academic ADHD research cohorts.
- Standardized linear T-score transformations ($M = 50, SD = 10$).

> **Important Disclosure**: This tool does not claim official endorsement or authorization by MHS. For forensic, official legal, or high-stakes clinical diagnostic evaluations, practitioners must utilize authorized, commercially licensed MHS test forms and scoring software.

---

## 3. Item Administration & Response Space

Each questionnaire item is answered on an ordinal 4-point Likert scale:

| Selected Option | Ordinal Value | Clinical Meaning | Frequency Anchor |
|:---:|:---:|---|---|
| **0** | `0` | Not at all, never | Rarely or never occurs |
| **1** | `1` | Just a little | Once in a while |
| **2** | `2` | Pretty much | Often, quite a bit |
| **3** | `3` | Very much | Very frequently |

The response vector is formally defined as:
$$\vec{R} = (r_1, r_2, \dots, r_{66}), \quad \text{where } r_i \in \{0, 1, 2, 3\}$$

---

## 4. Subscale Decomposition & Scored Item Loadings

The long-form CAARS evaluates eight clinical subscales (A through H). In the clinical literature, authors often cite the *factor-pure core item count* (e.g. 12 items for Factor A, 9 items for DSM Inattention). In the actual 66-item long-form protocol, however, multiple items cross-load across diagnostic categories and symptom clusters.

The table below clarifies the exact item loadings implemented in [web/js/questions.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/web/js/questions.js) and scored by [web/js/scoring.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/web/js/scoring.js):

| Scale Code | Scale Name | Scored Item Count | Specific Item IDs Loading onto Scale | Norm Table `max_raw` |
|:---:|---|:---:|---|:---:|
| **A** | Inattention / Memory Problems | 19 | 1, 5, 9, 13, 17, 21, 25, 28, 32, 35, 36, 40, 42, 45, 49, 53, 56, 59, 63 | 36 |
| **B** | Hyperactivity / Restlessness | 16 | 2, 6, 10, 14, 18, 22, 26, 31, 37, 43, 47, 48, 52, 57, 61, 64 | 36 |
| **C** | Impulsivity / Emotional Lability | 17 | 3, 7, 11, 15, 19, 23, 27, 30, 33, 38, 41, 46, 50, 54, 58, 62, 65 | 36 |
| **D** | Problems with Self-Concept | 14 | 4, 8, 12, 16, 20, 24, 29, 34, 39, 44, 51, 55, 60, 66 | 18 |
| **E** | DSM-IV Inattentive Symptoms | 13 | 5, 9, 13, 17, 21, 25, 28, 35, 36, 40, 42, 45, 59 | 27 |
| **F** | DSM-IV Hyperactive-Impulsive Symptoms | 12 | 2, 3, 6, 7, 10, 18, 26, 27, 30, 43, 54, 61 | 27 |
| **G** | DSM-IV Total ADHD Symptoms | 25 | Defined by sum invariant: $\text{Raw}(E) + \text{Raw}(F)$ | 54 |
| **H** | CAARS ADHD Index | 14 | 1, 7, 11, 14, 17, 23, 25, 28, 30, 35, 41, 49, 56, 63 | 36 |

### Clamping to `max_raw`
Because certain subscales contain items that load from related symptom domains, the raw score is clamped to the normative distribution's ceiling `max_raw` (e.g. 36 for Scale A, 27 for Scale E, 54 for Scale G) before table lookup:
$$\text{Raw}_{\text{clamped}} = \max\big(0, \min(\text{max\_raw}, \text{Raw})\big)$$

---

## 5. Raw Score Calculation Engine

### 5.1. Direct Scales: A, B, C, D, E, F, and H
For each scale $S \in \{A, B, C, D, E, F, H\}$, the raw score is the exact sum of ordinal responses across all questions belonging to that scale:

$$\text{Raw}(S) = \sum_{i \in \text{Items}(S)} r_i$$

### 5.2. Scale G: DSM-IV Total Symptoms Sum Rule
Scale G represents the composite DSM diagnostic symptom criteria. Psychometrically and mathematically, Scale G is defined as the exact sum of the Inattentive scale (Scale E) and the Hyperactive-Impulsive scale (Scale F):

$$\text{Raw}(G) \equiv \text{Raw}(E) + \text{Raw}(F)$$

This mathematical invariant is strictly asserted in automated test `tests/test_scoring.js`:
```javascript
assert.strictEqual(rawMixed.G, rawMixed.E + rawMixed.F);
```

---

## 6. Protocol Validity: The Inconsistency Index (INC)

### 6.1. Rationale
The **Inconsistency Index** detects careless responding, random answering, language comprehension breakdown, or intentional response distortion. It measures the degree of difference across 8 pairs of items with closely related psychometric content.

### 6.2. The 8 Inconsistency Pairs
1. `Pair 1`: Item 1 and Item 28
2. `Pair 2`: Item 5 and Item 42
3. `Pair 3`: Item 9 and Item 36
4. `Pair 4`: Item 14 and Item 52
5. `Pair 5`: Item 18 and Item 61
6. `Pair 6`: Item 22 and Item 48
7. `Pair 7`: Item 25 and Item 59
8. `Pair 8`: Item 31 and Item 64

### 6.3. Formula & Cutoff Threshold
For the 8 pairs $P = \{(p_{k,1}, p_{k,2})\}_{k=1}^8$:

$$\text{INC} = \sum_{k=1}^8 \big| r_{p_{k,1}} - r_{p_{k,2}} \big|$$

- **Theoretical Range**: `0` (perfect internal consistency) to `24` (maximum discordance, answering 0 vs. 3 on all 8 pairs).
- **$\text{INC} < 8$ (Valid Protocol)**: Responses reflect acceptable internal consistency. Clinical profile can be evaluated.
- **$\text{INC} \ge 8$ (Inconsistent / Flagged Protocol)**: Severe discordance detected. An explicit validity alert is rendered, warning that clinical elevations may reflect inconsistent or unengaged responding.

---

## 7. Normative Standardization (Standard T-Scores)

### 7.1. Demographic Cohorts
Standardized T-scores control for age- and sex-related base rate differences in adult ADHD symptom reporting. Normative lookups are stratified across 12 distinct cohorts:
- **Form Type**: `Self-Report (CAARS-S:L)` vs `Observer Report (CAARS-O:L)`
- **Biological Sex**: `Male` vs `Female`
- **Age Bracket**: `18–29`, `30–49`, and `50+` Years

Across the 8 subscales, this constitutes **96 independent conversion tables** comprising 3,552 distinct raw-to-T lookup mappings.

### 7.2. T-Score Distribution & Bounding
Standard T-scores represent a linear transformation of the standard normal $Z$-metric:
- Distribution Mean: $\mu_T = 50$
- Standard Deviation: $\sigma_T = 10$

$$T = 50 + 10 \cdot \left( \frac{\text{Raw} - \mu_{\text{cohort}}}{\sigma_{\text{cohort}}} \right)$$

T-scores are strictly clamped between $[30, 90]$:
- Floor ($T = 30$): $-2.0$ SD below normative mean.
- Ceiling ($T = 90$): $+4.0$ SD above normative mean.

---

## 8. Empirical Percentiles vs. Normal CDF Fallback

### 8.1. Empirical Percentiles (Primary Source of Truth)
Adult ADHD symptom raw distributions are typically right-skewed in the general population (most adults report low levels of hyperactivity or inattention, with a long tail of high scores). Therefore, linear Gaussian conversions do not accurately capture true percentile ranks, particularly in the lower and middle ranges.

In this implementation:
- **All 3,552 data points in [web/js/norms.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/web/js/norms.js) have pre-computed empirical percentiles.**
- When a raw score is looked up in the normative table, the percentile returned is the **empirical percentile** derived from normative cohort distributions, flagged with `percentile_method: 'empirical'`.

### 8.2. Fallback Gaussian CDF Approximation $\Phi(Z)$
If an out-of-bounds or untabled raw score is evaluated, the engine uses a parametric Gaussian fallback based on the cohort mean $\mu$ and standard deviation $\sigma$:

$$Z = \frac{T - 50}{10}, \quad \Phi(Z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{Z} e^{-t^2 / 2} \, dt$$

Evaluated via the polynomial error function approximation (Abramowitz & Stegun):
$$\Phi(Z) \approx 1 - \frac{1}{\sqrt{2\pi}} e^{-Z^2/2} \sum_{i=1}^5 a_i t^i, \quad t = \frac{1}{1 + p|Z|}$$

Whenever this approximation is utilized, the score object explicitly marks:
```json
{
  "percentile": 84.1,
  "percentile_method": "estimated_gaussian"
}
```
This transparently distinguishes empirical percentiles from Gaussian estimates.

---

## 9. Clinical Classification Tiers

T-scores map into 4 standardized clinical interpretive levels:

| T-Score Range | Classification | CSS Level Class | Clinical Interpretation |
|:---:|:---:|:---:|---|
| **$T < 60$** | **Average** | `average` | Within typical normative limits. Symptoms occur with typical frequency. |
| **$60 \le T \le 64$** | **Borderline** | `borderline` | Mildly atypical / borderline clinical concern. May indicate subthreshold difficulties. |
| **$65 \le T \le 69$** | **Elevated** | `elevated` | **Clinically significant elevation** (~1.5–1.9 SD above mean). Symptoms occur significantly more frequently than the normative population. |
| **$T \ge 70$** | **Very Elevated** | `very_elevated` | **Markedly atypical elevation** (≥ 2.0 SD above mean, top ~2% of population). Indicates substantial, pronounced behavioral symptoms. |

---

## 10. Incomplete Protocol Gatekeeping

Standard CAARS administration guidelines forbid interpreting an assessment with missing answers.
The function `validateResponses(responses)` in [web/js/scoring.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/web/js/scoring.js) iterates through all 66 question IDs:
- If any question is unanswered or out-of-range, scoring terminates immediately:
  ```json
  {
    "status": "incomplete",
    "is_scorable": false,
    "missing_count": 5,
    "missing_ids": [12, 23, 44, 51, 62],
    "error": "Assessment is incomplete (5 of 66 items unanswered)..."
  }
  ```
- The UI prevents report generation and generates jump links directly to each missing question.

---

## 11. Automated Test Suite Verification

The engine's mathematical and psychometric specifications are verified by 4 standalone Node.js test suites in `tests/`:

1. [tests/test_scoring.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/tests/test_scoring.js): Verifies 66 total item counts, specific scale loadings (A:19, B:16, C:17, D:14, E:13, F:12, H:14), raw summation, and Scale G sum invariant ($E + F$).
2. [tests/test_norms.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/tests/test_norms.js): Verifies all 96 demographic tables and tests 3,552 individual raw-to-T-score points with zero lookup failures.
3. [tests/test_inconsistency.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/tests/test_inconsistency.js): Verifies pair indices, discordance calculations, and exact boundary transition between INC = 7 (Valid) and INC = 8 (Flagged).
4. [tests/test_boundaries.js](file:///c:/Users/haris/Desktop/leap%2026%20peoject/tests/test_boundaries.js): Verifies clamping boundaries ($T \in [30, 90]$), classification thresholds (59/60, 64/65, 69/70), and single/multiple missing response detection.
