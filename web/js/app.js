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
    language: 'en',
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
    btnLangEn: document.getElementById('btn-lang-en'),
    btnLangMl: document.getElementById('btn-lang-ml'),

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
     1.5. Language Management (i18n: English / Malayalam)
     ========================================================================== */
  function initLanguage() {
    const savedLang = localStorage.getItem('caars_lang');
    const initialLang = (savedLang === 'ml') ? 'ml' : 'en';
    setLanguage(initialLang);
  }

  function setLanguage(lang) {
    state.language = lang;
    if (typeof window !== 'undefined') {
      window.CAARS_ACTIVE_LANG = lang;
    }
    elements.html.setAttribute('lang', lang);
    localStorage.setItem('caars_lang', lang);

    // Update toggle buttons
    if (elements.btnLangEn && elements.btnLangMl) {
      elements.btnLangEn.classList.toggle('active', lang === 'en');
      elements.btnLangEn.setAttribute('aria-pressed', lang === 'en');
      elements.btnLangMl.classList.toggle('active', lang === 'ml');
      elements.btnLangMl.setAttribute('aria-pressed', lang === 'ml');
    }

    // Refresh UI text across stages
    updateStaticUI();

    // If currently on Survey stage, re-render questions dynamically without losing responses
    if (elements.stageSurvey && elements.stageSurvey.classList.contains('active')) {
      renderCurrentSection();
    } else if (elements.stageReview && elements.stageReview.classList.contains('active')) {
      handleSurveyReview();
    } else if (elements.stageResults && elements.stageResults.classList.contains('active') && state.evaluation) {
      renderResultsReport();
    }
  }

  function updateStaticUI() {
    const lang = state.language;
    const isMl = lang === 'ml';
    const t = (k, p) => window.CAARS_I18N ? window.CAARS_I18N.t(k, p, lang) : k;

    const updateBtnText = (btn, textKey) => {
      if (!btn) return;
      const span = btn.querySelector('span');
      if (span) span.textContent = t(textKey);
      else btn.textContent = t(textKey);
    };

    // Stage 1 Setup Text
    const headingSetup = document.getElementById('heading-setup');
    if (headingSetup) headingSetup.textContent = t('setup_title');
    
    const heroSub = document.querySelector('#stage-setup .hero-subtitle');
    if (heroSub) heroSub.textContent = t('setup_subtitle');

    if (elements.btnStartSurvey) {
      updateBtnText(elements.btnStartSurvey, 'btn_start_survey');
    }

    // Form labels and dropdown options
    const lblFormType = document.getElementById('label-form-type');
    if (lblFormType) lblFormType.textContent = t('form_type_label');
    
    const optFormSelf = document.getElementById('opt-form-self');
    if (optFormSelf) optFormSelf.textContent = t('form_self');
    
    const optFormObserver = document.getElementById('opt-form-observer');
    if (optFormObserver) optFormObserver.textContent = t('form_observer');

    const lblGender = document.getElementById('label-gender');
    if (lblGender) lblGender.textContent = t('gender_label');

    const optGenderMale = document.getElementById('opt-gender-male');
    if (optGenderMale) optGenderMale.textContent = t('gender_male');

    const optGenderFemale = document.getElementById('opt-gender-female');
    if (optGenderFemale) optGenderFemale.textContent = t('gender_female');

    const lblAge = document.getElementById('label-age-bracket');
    if (lblAge) lblAge.textContent = t('age_label');

    const optAge1829 = document.getElementById('opt-age-18-29');
    if (optAge1829) optAge1829.textContent = t('age_18_29');

    const optAge3049 = document.getElementById('opt-age-30-49');
    if (optAge3049) optAge3049.textContent = t('age_30_49');

    const optAge50Plus = document.getElementById('opt-age-50-plus');
    if (optAge50Plus) optAge50Plus.textContent = t('age_50_plus');

    const lblRater = document.getElementById('label-rater');
    if (lblRater) lblRater.textContent = t('rater_label');

    if (elements.inputRaterLabel) {
      elements.inputRaterLabel.placeholder = t('rater_placeholder');
    }

    const offlinePillText = document.getElementById('offline-pill-text');
    if (offlinePillText) offlinePillText.textContent = t('offline_pill');

    // Likert guide headers and options
    const guideTitle = document.getElementById('likert-guide-title') || document.querySelector('.info-callout .callout-title span');
    if (guideTitle) guideTitle.textContent = t('likert_guide_title');

    const guideDesc = document.getElementById('likert-guide-desc');
    if (guideDesc) guideDesc.textContent = t('likert_guide_desc');

    if (window.CAARS_I18N && window.CAARS_I18N.getLikertLegend) {
      const legendTexts = window.CAARS_I18N.getLikertLegend(lang);
      [0, 1, 2, 3].forEach(val => {
        const el = document.getElementById(`legend-text-${val}`);
        if (el && legendTexts[val]) {
          el.innerHTML = legendTexts[val];
        }
      });
    }

    // Stage 2 Buttons (Arrow navigation)
    if (elements.btnSurveyPrev) {
      elements.btnSurveyPrev.setAttribute('aria-label', t('btn_prev'));
      elements.btnSurveyPrev.setAttribute('title', t('btn_prev'));
    }
    if (elements.btnSurveyPrevTop) {
      elements.btnSurveyPrevTop.setAttribute('aria-label', t('btn_prev'));
      elements.btnSurveyPrevTop.setAttribute('title', t('btn_prev'));
    }
    if (elements.btnSurveyNext) {
      elements.btnSurveyNext.setAttribute('aria-label', t('btn_next'));
      elements.btnSurveyNext.setAttribute('title', t('btn_next'));
    }
    if (elements.btnSurveyNextTop) {
      elements.btnSurveyNextTop.setAttribute('aria-label', t('btn_next'));
      elements.btnSurveyNextTop.setAttribute('title', t('btn_next'));
    }
    if (elements.btnSurveyReview) {
      const sp = elements.btnSurveyReview.querySelector('span');
      if (sp) sp.textContent = t('btn_review');
    }
    if (elements.btnSurveyReviewTop) {
      const sp = elements.btnSurveyReviewTop.querySelector('span');
      if (sp) sp.textContent = t('btn_review');
    }

    // Stage 3 Review UI
    const headingReview = document.getElementById('heading-review');
    if (headingReview) headingReview.textContent = t('review_title');

    const reviewSub = document.querySelector('#stage-review .review-box > p');
    if (reviewSub) reviewSub.textContent = t('review_subtitle');

    updateBtnText(elements.btnReviewBack, 'btn_review_back');
    updateBtnText(elements.btnCalculateScores, 'btn_calculate_scores');

    // Stage 4 Results UI
    const headingResults = document.getElementById('heading-results');
    if (headingResults) headingResults.textContent = t('report_title');

    const btnExportSpan = document.querySelector('#btn-export-dropdown span');
    if (btnExportSpan) btnExportSpan.textContent = t('btn_export_options');

    const exportJsonTitle = document.querySelector('#btn-export-json .export-item-title');
    if (exportJsonTitle) exportJsonTitle.textContent = t('btn_export_json_title');

    const exportJsonDesc = document.querySelector('#btn-export-json .export-item-subtitle');
    if (exportJsonDesc) exportJsonDesc.textContent = t('btn_export_json_desc');

    const exportCsvTitle = document.querySelector('#btn-export-csv .export-item-title');
    if (exportCsvTitle) exportCsvTitle.textContent = t('btn_export_csv_title');

    const exportCsvDesc = document.querySelector('#btn-export-csv .export-item-subtitle');
    if (exportCsvDesc) exportCsvDesc.textContent = t('btn_export_csv_desc');

    const heroScoresTitle = document.querySelector('.hero-scores-section .table-title');
    if (heroScoresTitle) heroScoresTitle.textContent = t('hero_title');

    const heroScoresSub = document.querySelector('.hero-scores-section .table-subtitle');
    if (heroScoresSub) heroScoresSub.textContent = t('hero_subtitle');

    const tableTitle = document.querySelector('.table-card .table-title');
    if (tableTitle) tableTitle.textContent = t('table_title');

    const tableSub = document.querySelector('.table-card .table-subtitle');
    if (tableSub) tableSub.textContent = t('table_subtitle');

    const thScale = document.querySelector('.caars-table th:nth-child(1)');
    if (thScale) thScale.textContent = t('th_scale');

    const thDesc = document.querySelector('.caars-table th:nth-child(2)');
    if (thDesc) thDesc.textContent = t('th_description');

    const thRaw = document.querySelector('.caars-table th:nth-child(3)');
    if (thRaw) thRaw.textContent = t('th_raw');

    const thT = document.querySelector('.caars-table th:nth-child(4)');
    if (thT) thT.textContent = t('th_tscore');

    const thClass = document.querySelector('.caars-table th:nth-child(5)');
    if (thClass) thClass.textContent = t('th_classification');

    const disclaimerTitle = document.querySelector('.medical-disclaimer-card .disclaimer-title span');
    if (disclaimerTitle) disclaimerTitle.textContent = isMl ? 'പ്രത്യേകം ശ്രദ്ധിക്കുക (Medical Disclaimer)' : 'Important Medical Disclaimer';

    const disclaimerText = document.querySelector('.medical-disclaimer-card .disclaimer-text');
    if (disclaimerText) {
      disclaimerText.innerHTML = isMl
        ? `മുതിർന്നവരിലെ ശ്രദ്ധക്കുറവും അമിത ചലനാത്മകതയും അളക്കാനുള്ള ഒരു ശാസ്ത്രീയ ചോദ്യാവലിയാണ് CAARS. ഇതിൽ ഉയർന്ന സ്കോർ (T &ge; 65) ലഭിക്കുന്നത് ലക്ഷണങ്ങൾ കൂടുതലാണെന്നതിന്റെ സൂചനയാണെങ്കിലും, <strong>ഇതുകൊണ്ട് മാത്രം ഒരാൾക്ക് ADHD ഉണ്ടെന്ന് ഉറപ്പിക്കാനാവില്ല</strong>. കൃത്യമായ രോഗനിർണ്ണയത്തിനായി ഒരു ഡോക്ടറെയോ ക്ലിനിക്കൽ സൈക്കോളജിസ്റ്റിനെയോ നേരിട്ട് കണ്ട് വിശദമായി സംസാരിക്കേണ്ടതാണ്.`
        : `The Conners' Adult ADHD Rating Scales (CAARS) is a screening tool designed to assess behavioral symptoms of adult ADHD. An elevated score (T &ge; 65) indicates higher-than-average symptoms, but <strong>does not establish a medical or psychiatric diagnosis on its own</strong>. A formal diagnosis requires a comprehensive clinical evaluation by a licensed healthcare professional, psychiatrist, or clinical psychologist.`;
    }

    const modalTitle = document.getElementById('modal-reset-title');
    if (modalTitle) modalTitle.textContent = t('modal_reset_title');

    const modalDesc = document.querySelector('#modal-confirm-reset .modal-desc');
    if (modalDesc) modalDesc.textContent = t('modal_reset_desc');

    const modalCancel = document.getElementById('btn-modal-cancel');
    if (modalCancel) modalCancel.textContent = t('btn_modal_cancel');

    const modalConfirm = document.getElementById('btn-modal-confirm');
    if (modalConfirm) modalConfirm.textContent = t('btn_modal_confirm');

    updateBtnText(elements.btnPrintReport, 'btn_print_report');
    updateBtnText(elements.btnStartNew, 'btn_start_new');
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
    const labels = window.CAARS_I18N
      ? window.CAARS_I18N.getLikertLabels(state.language)
      : ['Not at all, never', 'Just a little', 'Pretty much, often', 'Very much'];

    sectionQuestions.forEach(q => {
      const qText = window.CAARS_I18N
        ? window.CAARS_I18N.getQuestionText(q, state.formType, state.language)
        : (isSelf ? q.text_self : q.text_observer);
      const currentScore = state.responses[q.id];

      const card = document.createElement('div');
      card.className = `question-card ${currentScore !== undefined ? 'answered' : ''}`;
      card.id = `q-card-${q.id}`;

      card.innerHTML = `
        <div class="card-top">
          <div class="q-header-meta">
            <span class="q-badge" aria-hidden="true">Q${String(q.id).padStart(2, '0')}</span>
            <span class="q-status-badge ${currentScore !== undefined ? 'visible' : ''}" aria-label="Answered" title="Answered">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
          </div>
          <div class="q-text" id="q-label-${q.id}">${qText}</div>
        </div>
        <div class="likert-group" role="radiogroup" aria-labelledby="q-label-${q.id}">
          ${[0, 1, 2, 3].map(val => {
            const isChecked = currentScore === val;
            return `
              <label class="likert-btn-label ${isChecked ? 'selected' : ''}" id="lbl-q${q.id}-${val}">
                <input type="radio" name="q_${q.id}" value="${val}" ${isChecked ? 'checked' : ''} aria-label="Option ${val}: ${labels[val]}">
                <span class="likert-score-num">${val}</span>
                <span class="likert-score-desc">${labels[val]}</span>
                <span class="likert-check-indicator" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
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

    // Update range indicator badge
    const rangeBadge = document.getElementById('survey-question-range');
    if (rangeBadge) {
      const startNum = startIdx + 1;
      const endNum = endIdx;
      const isMl = state.language === 'ml';
      rangeBadge.textContent = isMl
        ? `ചോദ്യങ്ങൾ ${startNum}–${endNum} / ${TOTAL_QUESTIONS}`
        : `Questions ${startNum}–${endNum} of ${TOTAL_QUESTIONS}`;
    }

    // Update arrow nav buttons
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
        btn.title = `Items ${i * SECTION_SIZE + 1}–${Math.min((i + 1) * SECTION_SIZE, TOTAL_QUESTIONS)}`;
        btn.setAttribute('aria-label', `Page ${i + 1}`);
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
      const statusBadge = card.querySelector('.q-status-badge');
      if (statusBadge) {
        statusBadge.classList.add('visible');
      }
      card.querySelectorAll('.likert-btn-label').forEach(lbl => {
        const inp = lbl.querySelector('input');
        if (inp && parseInt(inp.value, 10) === score) {
          lbl.classList.add('selected');
        } else {
          lbl.classList.remove('selected');
        }
      });

      // Mobile ergonomic auto-advance: smoothly scrolls to the next question
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          const nextCard = card.nextElementSibling;
          if (nextCard && nextCard.classList.contains('question-card')) {
            nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            const footer = document.querySelector('.nav-footer');
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }, 220);
      }
    }

    updateProgressBar();
    renderPagination();
  }

  function updateProgressBar() {
    const answeredCount = Object.keys(state.responses).length;
    const pct = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

    const counterText = window.CAARS_I18N
      ? window.CAARS_I18N.t('answered_counter', { answered: answeredCount, total: TOTAL_QUESTIONS }, state.language)
      : `${answeredCount} / ${TOTAL_QUESTIONS} Answered`;
    elements.labelAnsweredCount.textContent = `${counterText} (${pct}%)`;
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

  function handleSurveyReview() {
    const validation = window.CAARS_SCORING.validateResponses(state.responses);
    const isMl = state.language === 'ml';

    if (!validation.complete) {
      elements.missingAlertBox.style.display = 'block';
      elements.completeNoticeBox.style.display = 'none';
      elements.btnCalculateScores.disabled = true;

      elements.missingTitleText.textContent = isMl
        ? `${validation.missingCount} ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാൻ ബാക്കിയുണ്ട്`
        : `${validation.missingCount} Unanswered Question${validation.missingCount > 1 ? 's' : ''} Remaining`;
      elements.missingDescText.textContent = isMl
        ? `റിപ്പോർട്ട് കൃത്യമാകാൻ എല്ലാ 66 ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകേണ്ടതുണ്ട്. താഴെ കാണുന്ന നമ്പറുകളിൽ ക്ലിക്ക് ചെയ്ത് വിട്ടുപോയ ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുക:`
        : `To calculate accurate results, all 66 questions must be answered. Click any question number below to fill it in:`;

      elements.missingItemsGrid.innerHTML = '';
      validation.missingIds.forEach(id => {
        const jumpBtn = document.createElement('button');
        jumpBtn.type = 'button';
        jumpBtn.className = 'jump-item-btn';
        jumpBtn.textContent = `Q${String(id).padStart(2, '0')}`;
        jumpBtn.title = isMl ? `ചോദ്യം ${id}-ലേക്ക് പോകുക` : `Jump to question ${id}`;
        jumpBtn.addEventListener('click', () => jumpToQuestion(id));
        elements.missingItemsGrid.appendChild(jumpBtn);
      });
    } else {
      elements.missingAlertBox.style.display = 'none';
      elements.completeNoticeBox.style.display = 'block';
      elements.btnCalculateScores.disabled = false;

      const compTitle = document.querySelector('#complete-notice-box .callout-title span');
      if (compTitle) compTitle.textContent = isMl ? 'എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകിക്കഴിഞ്ഞു!' : 'All 66 Questions Answered!';
      const compDesc = document.querySelector('#complete-notice-box p');
      if (compDesc) compDesc.textContent = isMl
        ? 'എല്ലാ 66 ചോദ്യങ്ങൾക്കും ഉത്തരങ്ങൾ ലഭിച്ചു. ഇനി നിങ്ങളുടെ പരിശോധനാ ഫലങ്ങളും റിപ്പോർട്ടും കാണാൻ താഴെയുള്ള ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.'
        : 'All 66 questions are complete. Click below to calculate your standardized scores and view your report.';
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

    renderResultsReport();
    showStage(elements.stageResults);
  }

  function renderResultsReport() {
    if (!state.evaluation) return;
    const result = state.evaluation;
    const isMl = state.language === 'ml';
    const t = (k, p) => window.CAARS_I18N ? window.CAARS_I18N.t(k, p, state.language) : k;

    // 1. Populate Report Header Metadata
    const d = new Date(result.timestamp);
    const dateFormatted = d.toLocaleDateString(isMl ? 'ml-IN' : undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    elements.reportTimestampLine.textContent = isMl
      ? `തീയതി: ${dateFormatted} • എഞ്ചിൻ v${result.scoring_version}`
      : `Administered: ${dateFormatted} • Standalone Engine v${result.scoring_version}`;
    elements.resFormType.textContent = result.protocol.form_type;
    elements.resNormGroup.textContent = isMl
      ? `${result.protocol.gender === 'Male' ? 'പുരുഷൻ' : 'സ്ത്രീ'} • പ്രായം ${result.protocol.age_bracket}`
      : `${result.protocol.gender} • Age ${result.protocol.age_bracket}`;
    elements.resRaterLabel.textContent = result.protocol.rater_label || (isMl ? 'സ്വയം' : 'Self');
    elements.resProtocolStatus.textContent = t('meta_status_value');

    // 2. Protocol Validity Banner
    const isInc = result.inconsistency_flag;
    elements.validityBannerCard.className = `validity-banner ${isInc ? 'inconsistent' : 'valid'}`;
    if (isMl) {
      elements.validityTitleText.textContent = isInc
        ? `ശ്രദ്ധിക്കുക: ഉത്തരങ്ങളിൽ പൊരുത്തക്കേടുകൾ കാണുന്നുണ്ട് (സ്കോർ = ${result.inconsistency_score}, പരിധി ≥ 8)`
        : `വിശ്വസനീയമായ ഉത്തരങ്ങൾ (സ്കോർ = ${result.inconsistency_score}, പരിധി ≥ 8)`;
      elements.validityDescText.textContent = isInc
        ? `ഒരേപോലെയുള്ള ചില ചോദ്യങ്ങൾക്ക് പരസ്പരവിരുദ്ധമായ ഉത്തരങ്ങൾ നൽകിയിട്ടുണ്ട്. അതിനാൽ ഈ റിപ്പോർട്ടിലെ സ്കോറുകൾ വിലയിരുത്തുമ്പോൾ ജാഗ്രത പുലർത്തുക.`
        : `ചോദ്യങ്ങൾക്ക് പരസ്പരം ഒത്തുപോകുന്ന വ്യക്തമായ ഉത്തരങ്ങളാണ് നൽകിയിട്ടുള്ളത്. ഈ റിപ്പോർട്ട് വിശ്വസനീയമാണ്.`;
    } else {
      elements.validityTitleText.textContent = isInc
        ? `Attention: Response Inconsistency Detected (Score = ${result.inconsistency_score}, Cutoff ≥ 8)`
        : `Consistent & Reliable Answers (Score = ${result.inconsistency_score}, Cutoff ≥ 8)`;
      elements.validityDescText.textContent = isInc
        ? `Similar questions received conflicting answers. Please interpret the scores with caution.`
        : `Answers across similar questions are consistent. This assessment protocol is reliable.`;
    }

    // 3. Render Large Hero Summary Scores First
    if (elements.heroScoresGrid) {
      elements.heroScoresGrid.innerHTML = '';
      const keyScaleCodes = ['H', 'G', 'E', 'F'];
      const keyScores = keyScaleCodes.map(code => result.scores.find(s => s.scale_code === code)).filter(Boolean);

      keyScores.forEach(s => {
        const scaleName = (isMl && window.CAARS_I18N)
          ? (window.CAARS_I18N.DICTIONARY.ml.scales[s.scale_code] || s.scale_name)
          : s.scale_name;
        const classifText = (isMl && window.CAARS_I18N)
          ? (window.CAARS_I18N.DICTIONARY.ml.classifications[s.classification_level] || s.classification)
          : s.classification;
        const rawPrefix = isMl ? 'പോയിന്റ്:' : 'Points:';
        const scalePrefix = isMl ? 'മേഖല' : 'Scale';

        const card = document.createElement('div');
        card.className = `hero-score-card ${s.classification_level}`;
        card.innerHTML = `
          <div class="hero-score-scale">${scalePrefix} ${s.scale_code}</div>
          <div class="hero-score-title">${scaleName}</div>
          <div class="hero-score-val-row">
            <span class="hero-t-score">${s.t_score}</span>
            <span class="hero-score-unit">T</span>
          </div>
          <div class="hero-score-raw">${rawPrefix} ${s.raw_score}</div>
          <div class="hero-score-badge">
            <span class="badge-tier ${s.classification_level}" style="width: 100%; display: block; padding: 0.35rem 0.5rem; font-size: 0.8rem;">
              ${classifText}
            </span>
          </div>
        `;
        elements.heroScoresGrid.appendChild(card);
      });
    }

    // 4. Subscale Scores Table with Large T-Score Display
    elements.subscaleTableBody.innerHTML = '';
    result.scores.forEach(s => {
      const scaleName = (isMl && window.CAARS_I18N)
        ? (window.CAARS_I18N.DICTIONARY.ml.scales[s.scale_code] || s.scale_name)
        : s.scale_name;
      const classifText = (isMl && window.CAARS_I18N)
        ? (window.CAARS_I18N.DICTIONARY.ml.classifications[s.classification_level] || s.classification)
        : s.classification;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="font-weight: 700; font-size: 1rem; color: var(--color-primary-text);">${s.scale_code}</td>
        <td><strong>${scaleName}</strong></td>
        <td style="text-align: center; color: var(--color-text-secondary); font-size: 0.95rem;">${s.raw_score}</td>
        <td class="t-score-cell">${s.t_score}</td>
        <td style="text-align: center;">
          <span class="badge-tier ${s.classification_level}">
            ${classifText}
          </span>
        </td>
      `;
      elements.subscaleTableBody.appendChild(row);
    });
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
    // Language Toggle Switch
    if (elements.btnLangEn) {
      elements.btnLangEn.addEventListener('click', () => setLanguage('en'));
    }
    if (elements.btnLangMl) {
      elements.btnLangMl.addEventListener('click', () => setLanguage('ml'));
    }

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

    // Keyboard Arrow Keys Navigation
    window.addEventListener('keydown', (e) => {
      if (elements.stageSurvey && elements.stageSurvey.classList.contains('active')) {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;
        if (e.key === 'ArrowRight' && state.currentSection < TOTAL_SECTIONS - 1) {
          handleSurveyNext();
        } else if (e.key === 'ArrowLeft' && state.currentSection > 0) {
          handleSurveyPrev();
        }
      }
    });

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
  initLanguage();
  initEventListeners();

})();
