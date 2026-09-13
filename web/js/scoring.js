/**
 * CAARS Pure Deterministic Scoring Engine.
 * Decoupled from UI / DOM.
 * Conforms strictly to requirement.md v2.0.0.
 * Dual-environment support: Browser & Node.js.
 */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    const questionsModule = require('./questions.js');
    const normsModule = require('./norms.js');
    module.exports = factory(questionsModule.CAARS_QUESTIONS, questionsModule.INCONSISTENCY_PAIRS, normsModule.CAARS_NORMS);
  } else {
    // Browser environment
    root.CAARS_SCORING = factory(root.CAARS_QUESTIONS, root.INCONSISTENCY_PAIRS, root.CAARS_NORMS);
  }
})(typeof self !== 'undefined' ? self : this, function (CAARS_QUESTIONS, INCONSISTENCY_PAIRS, CAARS_NORMS) {
  'use strict';

  const APP_VERSION = '2.0.0';
  const SCORING_VERSION = '2.0.0';

  const SCALE_METADATA = {
    A: { code: 'A', name: 'Inattention / Memory Problems', max_raw: 36, item_count: 19 },
    B: { code: 'B', name: 'Hyperactivity / Restlessness', max_raw: 36, item_count: 16 },
    C: { code: 'C', name: 'Impulsivity / Emotional Lability', max_raw: 36, item_count: 17 },
    D: { code: 'D', name: 'Problems with Self-Concept', max_raw: 18, item_count: 14 },
    E: { code: 'E', name: 'DSM-IV Inattentive Symptoms', max_raw: 27, item_count: 13 },
    F: { code: 'F', name: 'DSM-IV Hyperactive-Impulsive Symptoms', max_raw: 27, item_count: 12 },
    G: { code: 'G', name: 'DSM-IV Total ADHD Symptoms', max_raw: 54, item_count: 25 },
    H: { code: 'H', name: 'CAARS ADHD Index', max_raw: 36, item_count: 14 }
  };

  /**
   * Helper: Standard Normal Cumulative Distribution Function for percentile fallback.
   */
  function normalCDF(z) {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const sign = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.sqrt(2.0);
    const t = 1.0 / (1.0 + p * x);
    const erf = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return 0.5 * (1.0 + sign * erf);
  }

  /**
   * Computes percentile from T-score with standard rounding.
   * Clamped strictly between 0.1% and 99.9%.
   */
  function computePercentileFromTScore(tScore) {
    const z = (tScore - 50.0) / 10.0;
    const pct = normalCDF(z) * 100.0;
    const clamped = Math.max(0.1, Math.min(99.9, pct));
    return parseFloat(clamped.toFixed(1));
  }

  /**
   * Classifies T-score into clinical psychometric tiers.
   */
  function classifyTScore(tScore) {
    if (tScore >= 70) {
      return {
        classification: 'Very Elevated',
        level: 'very_elevated',
        description: 'Markedly atypical (T ≥ 70, ≥ 2.0 SD above mean, top ~2%)'
      };
    } else if (tScore >= 65) {
      return {
        classification: 'Elevated',
        level: 'elevated',
        description: 'Moderately atypical (T 65–69, ~1.5–1.9 SD above mean, top ~7%)'
      };
    } else if (tScore >= 60) {
      return {
        classification: 'Borderline',
        level: 'borderline',
        description: 'Mildly atypical / Borderline clinical concern (T 60–64)'
      };
    } else {
      return {
        classification: 'Average',
        level: 'average',
        description: 'Within typical normative limits (T < 60)'
      };
    }
  }

  /**
   * Normalizes form string: 'CAARS-S:L' or 'self' -> 'self'; 'CAARS-O:L' or 'observer' -> 'observer'.
   */
  function normalizeForm(form) {
    const lower = String(form || '').toLowerCase();
    if (lower.includes('obs') || lower.includes('o:l')) return 'observer';
    return 'self';
  }

  /**
   * Validates response completeness.
   * Responses can be an array (0-indexed or 1-indexed) or a map/object { [qid]: score }.
   * Returns { complete: boolean, missing: number[] }
   */
  function validateResponses(responses) {
    const missing = [];
    for (let qid = 1; qid <= 66; qid++) {
      let val = undefined;
      if (Array.isArray(responses)) {
        val = responses[qid] !== undefined ? responses[qid] : responses[qid - 1];
      } else if (responses && typeof responses === 'object') {
        val = responses[qid] !== undefined ? responses[qid] : responses[String(qid)];
      }

      if (val === undefined || val === null || val === '') {
        missing.push(qid);
      } else {
        const num = Number(val);
        if (isNaN(num) || num < 0 || num > 3) {
          missing.push(qid);
        }
      }
    }
    return {
      complete: missing.length === 0,
      missingCount: missing.length,
      missingIds: missing
    };
  }

  /**
   * Extracts response value for question ID (1..66) as integer 0..3.
   */
  function getResponse(responses, qid) {
    let val = undefined;
    if (Array.isArray(responses)) {
      val = responses[qid] !== undefined ? responses[qid] : responses[qid - 1];
    } else if (responses && typeof responses === 'object') {
      val = responses[qid] !== undefined ? responses[qid] : responses[String(qid)];
    }
    const num = parseInt(val, 10);
    return isNaN(num) ? 0 : Math.max(0, Math.min(3, num));
  }

  /**
   * Computes raw scores for all subscales A through H.
   */
  function computeRawScores(responses) {
    const rawScores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };

    for (const q of CAARS_QUESTIONS) {
      const qid = q.id;
      const score = getResponse(responses, qid);
      for (const scale of q.scales) {
        if (rawScores[scale] !== undefined) {
          rawScores[scale] += score;
        }
      }
    }

    // Scale G is the exact sum of Scale E and Scale F
    rawScores.G = rawScores.E + rawScores.F;

    return rawScores;
  }

  /**
   * Computes Inconsistency Index across the 8 standardized item pairs.
   */
  function computeInconsistencyIndex(responses) {
    let sumDiff = 0;
    const pairDetails = [];

    for (const pair of INCONSISTENCY_PAIRS) {
      const q1 = pair[0];
      const q2 = pair[1];
      const r1 = getResponse(responses, q1);
      const r2 = getResponse(responses, q2);
      const diff = Math.abs(r1 - r2);
      sumDiff += diff;
      pairDetails.push({ q1, q2, r1, r2, diff });
    }

    const isFlagged = sumDiff >= 8;
    return {
      score: sumDiff,
      flag: isFlagged,
      cutoff: 8,
      status: isFlagged ? 'Inconsistent' : 'Valid',
      pairDetails: pairDetails,
      warning: isFlagged
        ? 'High response discordance detected across paired validity items (Inconsistency Index ≥ 8). Interpret clinical elevations with caution due to possible response distortion or careless answering.'
        : 'Inconsistency Index within normal limits (< 8). Response pattern reflects reliable internal consistency across paired items.'
    };
  }

  /**
   * Looks up normative T-Score and Percentile from CAARS_NORMS tables.
   */
  function lookupNorm(form, gender, ageBracket, scaleCode, rawScore) {
    const normForm = normalizeForm(form);
    const formTable = CAARS_NORMS[normForm];
    if (!formTable) {
      throw new Error(`Unknown form '${form}' in normative lookup.`);
    }

    const genderTable = formTable[gender];
    if (!genderTable) {
      throw new Error(`Unknown gender '${gender}' in normative lookup.`);
    }

    const ageTable = genderTable[ageBracket];
    if (!ageTable) {
      throw new Error(`Unknown age bracket '${ageBracket}' in normative lookup.`);
    }

    const scaleNorm = ageTable[scaleCode];
    if (!scaleNorm) {
      throw new Error(`Unknown scale '${scaleCode}' in normative lookup.`);
    }

    const maxRaw = scaleNorm.max_raw || 36;
    const clampedRaw = Math.max(0, Math.min(maxRaw, rawScore));

    // Look up in lookup array
    let tScore = null;
    let percentile = null;
    let percentileMethod = 'empirical';

    if (Array.isArray(scaleNorm.lookup)) {
      const entry = scaleNorm.lookup.find(item => item.raw === clampedRaw);
      if (entry) {
        tScore = entry.t_score;
        percentile = entry.percentile;
        percentileMethod = 'empirical';
      }
    }

    // Fallback if not directly found in array
    if (tScore === null) {
      const mean = scaleNorm.cohort_mean;
      const sd = scaleNorm.cohort_sd;
      if (mean !== undefined && sd && sd > 0) {
        tScore = Math.round(50 + 10 * ((clampedRaw - mean) / sd));
      } else {
        tScore = 50;
      }
    }

    // Strict T-Score clamping [30, 90]
    tScore = Math.max(30, Math.min(90, Math.round(tScore)));

    if (percentile === null || percentile === undefined) {
      percentile = computePercentileFromTScore(tScore);
      percentileMethod = 'estimated_gaussian';
    } else {
      percentile = parseFloat(Number(percentile).toFixed(1));
    }

    return {
      raw_score: clampedRaw,
      t_score: tScore,
      percentile: percentile,
      percentile_method: percentileMethod
    };
  }

  /**
   * Main Evaluation Function.
   * Enforces strict incomplete protocol check.
   * Decoupled deterministic calculations.
   */
  function evaluateAssessment(responses, formType, gender, ageBracket, options = {}) {
    const normForm = normalizeForm(formType);
    const validGender = gender === 'Female' ? 'Female' : 'Male';
    const validAge = ['18-29', '30-49', '50+'].includes(ageBracket) ? ageBracket : '18-29';

    // Step 1: Check completeness
    const validation = validateResponses(responses);
    if (!validation.complete) {
      return {
        status: 'incomplete',
        is_scorable: false,
        missing_count: validation.missingCount,
        missing_ids: validation.missingIds,
        error: `Assessment is incomplete (${validation.missingCount} of 66 items unanswered). All 66 items must be answered before standard scoring can proceed.`
      };
    }

    // Step 2: Raw scores
    const rawScores = computeRawScores(responses);

    // Step 3: Inconsistency Index
    const inconsistency = computeInconsistencyIndex(responses);

    // Step 4: Normative T-scores and percentiles
    const scaleResults = [];
    const scaleOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (const code of scaleOrder) {
      const meta = SCALE_METADATA[code];
      const raw = rawScores[code];
      const normResult = lookupNorm(normForm, validGender, validAge, code, raw);
      const tier = classifyTScore(normResult.t_score);

      scaleResults.push({
        scale_code: code,
        scale_name: meta.name,
        raw_score: raw,
        max_raw: meta.max_raw,
        item_count: meta.item_count,
        t_score: normResult.t_score,
        percentile: normResult.percentile,
        percentile_method: normResult.percentile_method,
        classification: tier.classification,
        classification_level: tier.level,
        description: tier.description
      });
    }

    // Step 5: Clinical dimension summary (Inattentive vs Hyperactive-Impulsive)
    const scaleA = scaleResults.find(s => s.scale_code === 'A');
    const scaleB = scaleResults.find(s => s.scale_code === 'B');
    const scaleC = scaleResults.find(s => s.scale_code === 'C');
    const scaleE = scaleResults.find(s => s.scale_code === 'E');
    const scaleF = scaleResults.find(s => s.scale_code === 'F');
    const scaleH = scaleResults.find(s => s.scale_code === 'H');

    return {
      status: 'complete',
      is_scorable: true,
      app_version: APP_VERSION,
      scoring_version: SCORING_VERSION,
      timestamp: new Date().toISOString(),
      protocol: {
        form_type: normForm === 'self' ? 'CAARS-S:L (Self-Report)' : 'CAARS-O:L (Observer Report)',
        form_code: normForm === 'self' ? 'CAARS-S:L' : 'CAARS-O:L',
        gender: validGender,
        age_bracket: validAge,
        rater_label: options.rater_label || (normForm === 'self' ? 'Self' : 'Observer')
      },
      inconsistency_score: inconsistency.score,
      inconsistency_flag: inconsistency.flag,
      inconsistency_status: inconsistency.status,
      inconsistency_warning: inconsistency.warning,
      inconsistency_pairs: inconsistency.pairDetails,
      scores: scaleResults,
      dimension_summary: {
        inattentive_elevated: (scaleA.t_score >= 65) || (scaleE.t_score >= 65),
        hyperactive_impulsive_elevated: (scaleB.t_score >= 65) || (scaleC.t_score >= 65) || (scaleF.t_score >= 65),
        adhd_index_elevated: scaleH.t_score >= 65,
        highest_subscale: [...scaleResults].sort((a, b) => b.t_score - a.t_score)[0]
      }
    };
  }

  return {
    APP_VERSION,
    SCORING_VERSION,
    SCALE_METADATA,
    normalCDF,
    computePercentileFromTScore,
    classifyTScore,
    validateResponses,
    computeRawScores,
    computeInconsistencyIndex,
    lookupNorm,
    evaluateAssessment
  };
});
