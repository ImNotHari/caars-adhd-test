/**
 * CAARS Web Application Controller & UI Coordinator.
 * Pure Client-Side, Ephemeral In-Memory State.
 * Conforms strictly to requirement.md v2.0.0.
 */

(function () {
  'use strict';

  // Constants
  const TOTAL_QUESTIONS = 66;
  const SECTION_SIZE = 10;
  const TOTAL_SECTIONS = Math.ceil(TOTAL_QUESTIONS / SECTION_SIZE); // 7 sections

  // Ephemeral State (Zero client-side storage for responses/demographics)
  const state = {
    formType: 'CAARS-S:L',
    gender: 'Male',
    ageBracket: '18-29',
    raterLabel: '',
    currentSection: 0,
    responses: {},
    evaluation: null,
    isDirty: false
  };

  // DOM Elements
  const elements = {
    html: document.documentElement,
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIconSun: document.getElementById('theme-icon-sun'),
    themeIconMoon: document.getElementById('theme-icon-moon'),

    // Stages
    stageSetup: document.getElementById('stage-setup'),
    stageSurvey: document.getElementById('stage-survey'),
    stageReview: document.getElementById('stage-review'),
    stageResults: document.getElementById('stage-results'),

    // Setup Form
    selectFormType: document.getElementById('select-form-type'),
    selectGender: document.getElementById('select-gender'),
    selectAgeBracket: document.getElementById('select-age-bracket'),
    inputRaterLabel: document.getElementById('input-rater-label'),
    btnStartSurvey: document.getElementById('btn-start-survey'),

    // Survey Stage
    labelActiveProtocol: document.getElementById('label-active-protocol'),
    paginationBar: document.getElementById('survey-pagination-bar'),
    paginationBarBottom: document.getElementById('survey-pagination-bar-bottom'),
    labelAnsweredCount: document.getElementById('label-answered-count'),
    surveyProgressFill: document.getElementById('survey-progress-fill'),
    questionsList: document.getElementById('questions-list'),
    btnSurveyPrev: document.getElementById('btn-survey-prev'),
    btnSurveyNext: document.getElementById('btn-survey-next'),
    btnSurveyReview: document.getElementById('btn-survey-review'),
    btnSurveyPrevTop: document.getElementById('btn-survey-prev-top'),
    btnSurveyNextTop: document.getElementById('btn-survey-next-top'),
    btnSurveyReviewTop: document.getElementById('btn-survey-review-top'),
    btnPrefillDemo: document.getElementById('btn-prefill-demo'),

    // Review Stage
    missingAlertBox: document.getElementById('missing-alert-box'),
    missingTitleText: document.getElementById('missing-title-text'),
    missingDescText: document.getElementById('missing-desc-text'),
    missingItemsGrid: document.getElementById('missing-items-grid'),
    completeNoticeBox: document.getElementById('complete-notice-box'),
    btnReviewBack: document.getElementById('btn-review-back'),
    btnCalculateScores: document.getElementById('btn-calculate-scores'),

    // Results Stage
    reportTimestampLine: document.getElementById('report-timestamp-line'),
    resFormType: document.getElementById('res-form-type'),
    resNormGroup: document.getElementById('res-norm-group'),
    resRaterLabel: document.getElementById('res-rater-label'),
    resProtocolStatus: document.getElementById('res-protocol-status'),
    validityBannerCard: document.getElementById('validity-banner-card'),
    validityIcon: document.getElementById('validity-icon'),
    validityTitleText: document.getElementById('validity-title-text'),
    validityDescText: document.getElementById('validity-desc-text'),
    heroScoresGrid: document.getElementById('hero-scores-grid'),
    subscaleTableBody: document.getElementById('subscale-table-body'),
    btnExportDropdown: document.getElementById('btn-export-dropdown'),
    exportDropdownWrapper: document.getElementById('export-dropdown-wrapper'),
    exportMenu: document.getElementById('export-menu'),
    btnExportJson: document.getElementById('btn-export-json'),
    btnExportCsv: document.getElementById('btn-export-csv'),
    btnPrintReport: document.getElementById('btn-print-report'),
    btnStartNew: document.getElementById('btn-start-new'),

    // Reset Modal
    modalConfirmReset: document.getElementById('modal-confirm-reset'),
    btnModalCancel: document.getElementById('btn-modal-cancel'),
    btnModalConfirm: document.getElementById('btn-modal-confirm')
  };

  /* ==========================================================================
     1. Theme Mode Management (The ONLY permitted localStorage item)
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem('caars_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }

  function setTheme(theme) {
    elements.html.setAttribute('data-theme', theme);
    if (elements.themeIconSun && elements.themeIconMoon) {
      elements.themeIconSun.style.display = theme === 'dark' ? 'block' : 'none';
      elements.themeIconMoon.style.display = theme === 'dark' ? 'none' : 'block';
    }
    localStorage.setItem('caars_theme', theme);
  }

  function toggleTheme() {
    const current = elements.html.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ==========================================================================
     2. Ephemeral Memory & Unsaved Warning Protection
     ========================================================================== */
  window.addEventListener('beforeunload', function (e) {
    if (state.isDirty && Object.keys(state.responses).length > 0) {
      e.preventDefault();
      e.returnValue = 'You have an assessment in progress. If you leave or reload this page, your responses will be lost.';
      return e.returnValue;
    }
  });

  /* ==========================================================================
     3. Stage Navigation Coordinator
     ========================================================================== */
  function showStage(stageElement) {
    [elements.stageSetup, elements.stageSurvey, elements.stageReview, elements.stageResults].forEach(s => {
      s.classList.remove('active');
    });
    stageElement.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
     4. Protocol Setup (Stage 1)
     ========================================================================== */
  function handleStartSurvey() {
    state.formType = elements.selectFormType.value;
    state.gender = elements.selectGender.value;
    state.ageBracket = elements.selectAgeBracket.value;
    state.raterLabel = elements.inputRaterLabel.value.trim() || (state.formType === 'CAARS-S:L' ? 'Self' : 'Observer');

    const formDesc = state.formType === 'CAARS-S:L' ? 'Self-Report' : 'Observer Report';
    elements.labelActiveProtocol.textContent = `${state.formType} (${formDesc}) • ${state.gender}, ${state.ageBracket}`;

    state.currentSection = 0;
    state.isDirty = true;

    renderCurrentSection();
    showStage(elements.stageSurvey);
  }

  /* ==========================================================================
     5. Survey Administration (Stage 2)
     ========================================================================== */
  function renderCurrentSection() {
    const startIdx = state.currentSection * SECTION_SIZE;
    const endIdx = Math.min(startIdx + SECTION_SIZE, TOTAL_QUESTIONS);
    const sectionQuestions = window.CAARS_QUESTIONS.slice(startIdx, endIdx);

    // Section Pagination & Progress
    renderPagination();
    updateProgressBar();

    // Clear and build question cards
    elements.questionsList.innerHTML = '';
    const isSelf = state.formType === 'CAARS-S:L';

    sectionQuestions.forEach(q => {
      const qText = isSelf ? q.text_self : q.text_observer;
      const currentScore = state.responses[q.id];

      const card = document.createElement('div');
      card.className = `question-card ${currentScore !== undefined ? 'answered' : ''}`;
      card.id = `q-card-${q.id}`;

      card.innerHTML = `
        <div class="card-top">
          <div class="q-badge" aria-hidden="true">Q${String(q.id).padStart(2, '0')}</div>
          <div class="q-text" id="q-label-${q.id}">${qText}</div>
        </div>
        <div class="likert-group" role="radiogroup" aria-labelledby="q-label-${q.id}">
          ${[0, 1, 2, 3].map(val => {
            const isChecked = currentScore === val;
            const labels = ['Not at all, never', 'Just a little', 'Pretty much, often', 'Very much'];
            return `
              <label class="likert-btn-label ${isChecked ? 'selected' : ''}" id="lbl-q${q.id}-${val}">
                <input type="radio" name="q_${q.id}" value="${val}" ${isChecked ? 'checked' : ''} aria-label="Option ${val}: ${labels[val]}">
                <span class="likert-score-num">${val}</span>
                <span class="likert-score-desc">${labels[val]}</span>
              </label>
            `;
          }).join('')}
        </div>
      `;

      // Event listener for radio change
      const radios = card.querySelectorAll('input[type="radio"]');
      radios.forEach(r => {
        r.addEventListener('change', function () {
          const score = parseInt(this.value, 10);
          handleSelectResponse(q.id, score);
        });
      });

      elements.questionsList.appendChild(card);
    });

    // Update section nav buttons
    elements.btnSurveyPrev.disabled = state.currentSection === 0;
    if (elements.btnSurveyPrevTop) elements.btnSurveyPrevTop.disabled = state.currentSection === 0;

    if (state.currentSection === TOTAL_SECTIONS - 1) {
      elements.btnSurveyNext.style.display = 'none';
      elements.btnSurveyReview.style.display = 'inline-flex';
      if (elements.btnSurveyNextTop) elements.btnSurveyNextTop.style.display = 'none';
      if (elements.btnSurveyReviewTop) elements.btnSurveyReviewTop.style.display = 'inline-flex';
    } else {
      elements.btnSurveyNext.style.display = 'inline-flex';
      elements.btnSurveyReview.style.display = 'none';
      if (elements.btnSurveyNextTop) elements.btnSurveyNextTop.style.display = 'inline-flex';
      if (elements.btnSurveyReviewTop) elements.btnSurveyReviewTop.style.display = 'none';
    }
  }

  function renderPagination() {
    const bars = [elements.paginationBar, elements.paginationBarBottom].filter(Boolean);
    bars.forEach(bar => {
      bar.innerHTML = '';
      for (let i = 0; i < TOTAL_SECTIONS; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isActive = i === state.currentSection;
        btn.className = `page-btn ${isActive ? 'active' : ''}`;
        btn.textContent = String(i + 1);
        btn.title = `Go to Section ${i + 1} (Items ${i * SECTION_SIZE + 1}–${Math.min((i + 1) * SECTION_SIZE, TOTAL_QUESTIONS)})`;
        btn.setAttribute('aria-label', `Section ${i + 1}`);
        if (isActive) {
          btn.setAttribute('aria-current', 'page');
        }

        // Check if all questions in section i are answered
        const sStart = i * SECTION_SIZE;
        const sEnd = Math.min(sStart + SECTION_SIZE, TOTAL_QUESTIONS);
        let sectionAllAnswered = true;
        for (let q = sStart; q < sEnd; q++) {
          const qid = window.CAARS_QUESTIONS[q].id;
          if (state.responses[qid] === undefined) {
            sectionAllAnswered = false;
            break;
          }
        }
        if (sectionAllAnswered) {
          btn.classList.add('section-complete');
        }

        btn.addEventListener('click', () => {
          if (state.currentSection !== i) {
            state.currentSection = i;
            renderCurrentSection();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
        bar.appendChild(btn);
      }
    });
  }

  function handleSelectResponse(qId, score) {
    state.responses[qId] = score;

    // Update visual styles on the question card
    const card = document.getElementById(`q-card-${qId}`);
    if (card) {
      card.classList.add('answered');
      card.classList.remove('highlight-missing');
      card.querySelectorAll('.likert-btn-label').forEach(lbl => {
        const inp = lbl.querySelector('input');
        if (inp && parseInt(inp.value, 10) === score) {
          lbl.classList.add('selected');
        } else {
          lbl.classList.remove('selected');
        }
      });
    }

    updateProgressBar();
    renderPagination();
  }

  function updateProgressBar() {
    const answeredCount = Object.keys(state.responses).length;
    const pct = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

    elements.labelAnsweredCount.textContent = `${answeredCount} / ${TOTAL_QUESTIONS} Answered (${pct}%)`;
    elements.surveyProgressFill.style.width = `${pct}%`;
    document.getElementById('progress-bar-container').setAttribute('aria-valuenow', pct);
  }

  function handleSurveyNext() {
    if (state.currentSection < TOTAL_SECTIONS - 1) {
      state.currentSection++;
      renderCurrentSection();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleSurveyPrev() {
    if (state.currentSection > 0) {
      state.currentSection--;
      renderCurrentSection();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* Pre-fill Demo Responses Shortcut */
  function handlePrefillDemo() {
    for (const q of window.CAARS_QUESTIONS) {
      const qid = q.id;
      const scales = q.scales || [];
      // Realistic elevated inattention and impulsivity profile
      if (scales.includes('A') || scales.includes('E') || scales.includes('H')) {
        state.responses[qid] = (qid % 2 === 0) ? 2 : 3;
      } else if (scales.includes('B') || scales.includes('F')) {
        state.responses[qid] = (qid % 3 === 0) ? 1 : 2;
      } else if (scales.includes('C')) {
        state.responses[qid] = (qid % 2 === 1) ? 2 : 1;
      } else {
        state.responses[qid] = 1;
      }
    }

    renderCurrentSection();
  }

  /* ==========================================================================
     6. Pre-Submit Validation & Review (Stage 3)
     ========================================================================== */
  function handleSurveyReview() {
    const validation = window.CAARS_SCORING.validateResponses(state.responses);

    if (!validation.complete) {
      elements.missingAlertBox.style.display = 'block';
      elements.completeNoticeBox.style.display = 'none';
      elements.btnCalculateScores.disabled = true;

      elements.missingTitleText.textContent = `Protocol Incomplete: ${validation.missingCount} Unanswered Item${validation.missingCount > 1 ? 's' : ''}`;
      elements.missingDescText.textContent = `Standard CAARS scoring requires all 66 items. Click any item number below to complete it:`;

      elements.missingItemsGrid.innerHTML = '';
      validation.missingIds.forEach(id => {
        const jumpBtn = document.createElement('button');
        jumpBtn.type = 'button';
        jumpBtn.className = 'jump-item-btn';
        jumpBtn.textContent = `Q${String(id).padStart(2, '0')}`;
        jumpBtn.title = `Jump to question ${id}`;
        jumpBtn.addEventListener('click', () => jumpToQuestion(id));
        elements.missingItemsGrid.appendChild(jumpBtn);
      });
    } else {
      elements.missingAlertBox.style.display = 'none';
      elements.completeNoticeBox.style.display = 'block';
      elements.btnCalculateScores.disabled = false;
    }

    showStage(elements.stageReview);
  }

  function jumpToQuestion(qid) {
    const targetSection = Math.floor((qid - 1) / SECTION_SIZE);
    state.currentSection = targetSection;
    renderCurrentSection();
    showStage(elements.stageSurvey);

    setTimeout(() => {
      const card = document.getElementById(`q-card-${qid}`);
      if (card) {
        card.classList.add('highlight-missing');
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  }

  /* ==========================================================================
     7. Scoring & Clinical Assessment Report (Stage 4)
     ========================================================================== */
  function handleCalculateScores() {
    const result = window.CAARS_SCORING.evaluateAssessment(
      state.responses,
      state.formType,
      state.gender,
      state.ageBracket,
      { rater_label: state.raterLabel }
    );

    if (!result.is_scorable) {
      alert(result.error);
      return;
    }

    state.evaluation = result;
    state.isDirty = false; // Scoring complete, unblock unload

    // 1. Populate Report Header Metadata
    const d = new Date(result.timestamp);
    const dateFormatted = d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    elements.reportTimestampLine.textContent = `Administered: ${dateFormatted} • Standalone Engine v${result.scoring_version}`;
    elements.resFormType.textContent = result.protocol.form_type;
    elements.resNormGroup.textContent = `${result.protocol.gender} • Age ${result.protocol.age_bracket}`;
    elements.resRaterLabel.textContent = result.protocol.rater_label;
    elements.resProtocolStatus.textContent = 'Complete & Scored';

    // 2. Protocol Validity Banner
    const isInc = result.inconsistency_flag;
    elements.validityBannerCard.className = `validity-banner ${isInc ? 'inconsistent' : 'valid'}`;
    elements.validityTitleText.textContent = isInc
      ? `PROTOCOL VALIDITY ALERT: High Response Inconsistency (Score = ${result.inconsistency_score}, Cutoff ≥ 8)`
      : `PROTOCOL VALIDITY: Acceptable Internal Consistency (Score = ${result.inconsistency_score}, Cutoff ≥ 8)`;
    elements.validityDescText.textContent = result.inconsistency_warning;

    // 3. Render Large Hero Summary Scores First
    if (elements.heroScoresGrid) {
      elements.heroScoresGrid.innerHTML = '';
      // Key summary diagnostic indices: H (ADHD Index), G (DSM-IV Total), E (Inattention), F (Hyperactivity)
      const keyScaleCodes = ['H', 'G', 'E', 'F'];
      const keyScores = keyScaleCodes.map(code => result.scores.find(s => s.scale_code === code)).filter(Boolean);

      keyScores.forEach(s => {
        const card = document.createElement('div');
        card.className = `hero-score-card ${s.classification_level}`;
        card.innerHTML = `
          <div class="hero-score-scale">Scale ${s.scale_code}</div>
          <div class="hero-score-title">${s.scale_name}</div>
          <div class="hero-score-val-row">
            <span class="hero-t-score">${s.t_score}</span>
            <span class="hero-score-unit">T</span>
          </div>
          <div class="hero-score-raw">Raw Score: ${s.raw_score}</div>
          <div class="hero-score-badge">
            <span class="badge-tier ${s.classification_level}" style="width: 100%; display: block; padding: 0.35rem 0.5rem; font-size: 0.8rem;">
              ${s.classification}
            </span>
          </div>
        `;
        elements.heroScoresGrid.appendChild(card);
      });
    }

    // 4. Subscale Scores Table with Large T-Score Display (Percentile omitted from clinical report)
    elements.subscaleTableBody.innerHTML = '';
    result.scores.forEach(s => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="font-weight: 700; font-size: 1rem; color: var(--color-primary-text);">${s.scale_code}</td>
        <td><strong>${s.scale_name}</strong></td>
        <td style="text-align: center; color: var(--color-text-secondary); font-size: 0.95rem;">${s.raw_score}</td>
        <td class="t-score-cell">${s.t_score}</td>
        <td style="text-align: center;">
          <span class="badge-tier ${s.classification_level}">
            ${s.classification}
          </span>
        </td>
      `;
      elements.subscaleTableBody.appendChild(row);
    });

    showStage(elements.stageResults);
  }

  /* ==========================================================================
     8. Export Functionality (100% Offline Client-Side Blob Downloads)
     ========================================================================== */
  function toggleExportDropdown(e) {
    if (e) e.stopPropagation();
    const isActive = elements.exportMenu && elements.exportMenu.classList.contains('active');
    if (isActive) {
      closeExportDropdown();
    } else if (elements.exportMenu && elements.btnExportDropdown) {
      elements.exportMenu.classList.add('active');
      elements.btnExportDropdown.setAttribute('aria-expanded', 'true');
    }
  }

  function closeExportDropdown() {
    if (elements.exportMenu) {
      elements.exportMenu.classList.remove('active');
    }
    if (elements.btnExportDropdown) {
      elements.btnExportDropdown.setAttribute('aria-expanded', 'false');
    }
  }

  function downloadBlob(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 150);
  }

  function getCleanDateStamp() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
  }

  function handleExportJSON() {
    closeExportDropdown();
    if (!state.evaluation) return;

    const res = state.evaluation;
    const exportPayload = {
      assessment: "CAARS (Conners' Adult ADHD Rating Scales)",
      engine_version: res.scoring_version,
      exported_at: new Date().toISOString(),
      protocol: {
        form_type: res.protocol.form_type,
        gender: res.protocol.gender,
        age_bracket: res.protocol.age_bracket,
        rater_label: res.protocol.rater_label || 'Self',
        total_items: res.protocol.total_items
      },
      validity: {
        inconsistency_score: res.inconsistency_score,
        inconsistency_cutoff: 8,
        inconsistency_flag: res.inconsistency_flag,
        status: res.inconsistency_flag ? 'Inconsistent (Validity Alert)' : 'Acceptable Internal Consistency'
      },
      scores: res.scores.map(s => ({
        scale_code: s.scale_code,
        scale_name: s.scale_name,
        raw_score: s.raw_score,
        t_score: s.t_score,
        classification: s.classification,
        classification_level: s.classification_level
      })),
      item_responses: state.responses
    };

    const jsonString = JSON.stringify(exportPayload, null, 2);
    const formCode = (res.protocol.form_type || 'CAARS').replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `CAARS_Assessment_${formCode}_${getCleanDateStamp()}.json`;
    downloadBlob(jsonString, filename, 'application/json');
  }

  function handleExportCSV() {
    closeExportDropdown();
    if (!state.evaluation) return;

    const res = state.evaluation;
    const formType = res.protocol.form_type || 'CAARS';
    const gender = res.protocol.gender || 'Unknown';
    const age = res.protocol.age_bracket || 'Unknown';
    const rater = res.protocol.rater_label || 'Self';
    const validity = res.inconsistency_flag ? 'High Inconsistency Alert' : 'Acceptable Internal Consistency';
    const dateStr = new Date().toISOString().slice(0, 10);

    const escapeCsv = val => {
      const s = String(val == null ? '' : val).replace(/"/g, '""');
      return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s}"` : s;
    };

    const lines = [
      `# CAARS Adult ADHD Assessment Score Export`,
      `# Form: ${escapeCsv(formType)}`,
      `# Demographics: ${escapeCsv(gender)} | Age ${escapeCsv(age)} | Rater: ${escapeCsv(rater)}`,
      `# Validity: Inconsistency Index = ${res.inconsistency_score} (${validity})`,
      `# Exported: ${dateStr}`,
      `Scale,Subscale Description,Raw Score,Standard T,Classification`
    ];

    res.scores.forEach(s => {
      lines.push([
        escapeCsv(s.scale_code),
        escapeCsv(s.scale_name),
        s.raw_score,
        s.t_score,
        escapeCsv(s.classification)
      ].join(','));
    });

    const csvContent = lines.join('\r\n');
    const formCode = formType.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `CAARS_Scores_${formCode}_${getCleanDateStamp()}.csv`;
    downloadBlob(csvContent, filename, 'text/csv;charset=utf-8;');
  }

  /* ==========================================================================
     9. Reset & Start New Assessment Modal
     ========================================================================== */
  function openResetModal() {
    elements.modalConfirmReset.classList.add('active');
  }

  function closeResetModal() {
    elements.modalConfirmReset.classList.remove('active');
  }

  function confirmReset() {
    closeResetModal();
    // Wipe ephemeral memory
    state.responses = {};
    state.evaluation = null;
    state.isDirty = false;
    state.currentSection = 0;

    elements.inputRaterLabel.value = '';
    showStage(elements.stageSetup);
  }

  /* ==========================================================================
     10. Event Listeners Initializer
     ========================================================================== */
  function initEventListeners() {
    // Theme toggle
    elements.btnThemeToggle.addEventListener('click', toggleTheme);

    // Stage 1
    elements.btnStartSurvey.addEventListener('click', handleStartSurvey);

    // Stage 2
    elements.btnSurveyNext.addEventListener('click', handleSurveyNext);
    elements.btnSurveyPrev.addEventListener('click', handleSurveyPrev);
    elements.btnSurveyReview.addEventListener('click', handleSurveyReview);
    if (elements.btnSurveyNextTop) elements.btnSurveyNextTop.addEventListener('click', handleSurveyNext);
    if (elements.btnSurveyPrevTop) elements.btnSurveyPrevTop.addEventListener('click', handleSurveyPrev);
    if (elements.btnSurveyReviewTop) elements.btnSurveyReviewTop.addEventListener('click', handleSurveyReview);
    elements.btnPrefillDemo.addEventListener('click', handlePrefillDemo);

    // Stage 3
    elements.btnReviewBack.addEventListener('click', () => showStage(elements.stageSurvey));
    elements.btnCalculateScores.addEventListener('click', handleCalculateScores);

    // Stage 4 Actions & Exports
    if (elements.btnExportDropdown) {
      elements.btnExportDropdown.addEventListener('click', toggleExportDropdown);
    }
    if (elements.btnExportJson) {
      elements.btnExportJson.addEventListener('click', handleExportJSON);
    }
    if (elements.btnExportCsv) {
      elements.btnExportCsv.addEventListener('click', handleExportCSV);
    }
    elements.btnPrintReport.addEventListener('click', () => window.print());
    elements.btnStartNew.addEventListener('click', openResetModal);

    // Close export dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (elements.exportDropdownWrapper && !elements.exportDropdownWrapper.contains(e.target)) {
        closeExportDropdown();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeExportDropdown();
        closeResetModal();
      }
    });

    // Modal
    elements.btnModalCancel.addEventListener('click', closeResetModal);
    elements.btnModalConfirm.addEventListener('click', confirmReset);
    elements.modalConfirmReset.addEventListener('click', function (e) {
      if (e.target === elements.modalConfirmReset) closeResetModal();
    });
  }

  // Self-initialization
  initTheme();
  initEventListeners();

})();
