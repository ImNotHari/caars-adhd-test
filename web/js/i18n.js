/**
 * CAARS Clinical Suite - Internationalization (i18n) Module
 * English & Malayalam (മലയാളം) Full Clinical Translation Dictionary
 * Pure Client-Side, Zero External Dependencies.
 */

(function () {
  'use strict';

  const I18N_DICTIONARY = {
    en: {
      app_title: "CAARS Adult ADHD Test",
      app_subtitle: "Adult ADHD Assessment & Screening",
      
      // Stage 1: Setup
      setup_title: "Before You Begin",
      setup_subtitle: "A 66-question standardized assessment designed to evaluate symptoms of adult ADHD.",
      form_type_label: "Who is this assessment for? *",
      form_self: "For myself (Self-Report — 66 Questions)",
      form_observer: "For someone else (Observer-Report — 66 Questions)",
      gender_label: "Gender *",
      gender_male: "Male",
      gender_female: "Female",
      age_label: "Age Bracket *",
      age_18_29: "18–29 Years",
      age_30_49: "30–49 Years",
      age_50_plus: "50+ Years",
      rater_label: "Name or relationship (Optional)",
      rater_placeholder: "e.g., Self, Partner, Parent, Friend",
      likert_guide_title: "How to Rate Your Answers",
      likert_guide_desc: "Read each question and choose how often this happens in daily life:",
      likert_0_legend: "<strong>Not at all</strong> (Never or very rarely occurs)",
      likert_1_legend: "<strong>Just a little</strong> (Occurs once in a while)",
      likert_2_legend: "<strong>Pretty often</strong> (Occurs frequently)",
      likert_3_legend: "<strong>Very much</strong> (Occurs almost all the time)",
      likert_0_desc: "Not at all (0 points)",
      likert_1_desc: "Just a little (1 point)",
      likert_2_desc: "Pretty often (2 points)",
      likert_3_desc: "Very much (3 points)",
      offline_pill: "Works 100% Offline • Private & Secure",
      btn_start_survey: "Start Questions",
      
      // Stage 2: Survey
      section_label: "Part",
      answered_counter: "{answered} of {total} Questions Answered",
      btn_prev: "Previous",
      btn_next: "Next",
      btn_review: "Review Answers",
      
      // Likert Options
      likert_labels: [
        "Not at all",
        "Just a little",
        "Pretty often",
        "Very much"
      ],
      
      // Stage 3: Review
      review_title: "Review Your Answers",
      review_subtitle: "Check that all questions are answered before calculating your results.",
      missing_title_alert: "{count} Unanswered Questions Remaining",
      missing_desc_alert: "To calculate accurate results, all 66 questions must be answered. Click any question number below to fill it in:",
      complete_title: "All 66 Questions Answered!",
      complete_desc: "All questions are complete. You can now calculate your standardized scores and view your report.",
      btn_review_back: "Back to Questions",
      btn_calculate_scores: "View Results",
      
      // Stage 4: Results
      report_title: "CAARS Assessment Report",
      meta_form: "Assessment Type",
      meta_norm_group: "Norm Group",
      meta_rater: "Rated By",
      meta_status: "Status",
      meta_status_value: "Complete",
      hero_title: "Key Clinical Findings",
      hero_subtitle: "Primary symptom scales and standardized normative T-scores (Average score = 50).",
      raw_score_prefix: "Points:",
      table_title: "Detailed Subscale Scores",
      table_subtitle: "All 8 symptom dimensions (T-score of 65 or higher indicates clinically elevated symptoms).",
      th_scale: "Code",
      th_description: "Symptom Area",
      th_raw: "Points",
      th_tscore: "T-Score",
      th_classification: "Severity",
      btn_export_options: "Save / Export Report",
      btn_export_json_title: "Download JSON",
      btn_export_json_desc: "Complete file containing all responses and scores",
      btn_export_csv_title: "Download CSV (Excel)",
      btn_export_csv_desc: "Spreadsheet table of scores for Excel",
      btn_print_report: "Print / Save as PDF",
      btn_start_new: "Start Over",
      modal_reset_title: "Start a New Assessment?",
      modal_reset_desc: "Starting over will immediately clear all current answers and scores. Since this tool runs entirely in offline memory, this cannot be undone.",
      btn_modal_cancel: "Go Back",
      btn_modal_confirm: "Yes, Start Over",
      
      // Subscale Names
      scales: {
        A: "Inattention & Memory Problems",
        B: "Hyperactivity & Restlessness",
        C: "Impulsivity & Emotional Lability",
        D: "Problems with Self-Confidence",
        E: "DSM-IV Inattentive Symptoms",
        F: "DSM-IV Hyperactive-Impulsive Symptoms",
        G: "DSM-IV Total Symptoms",
        H: "ADHD Index"
      },
      
      // Classifications
      classifications: {
        very_elevated: "Very Elevated",
        elevated: "Elevated",
        borderline: "Borderline",
        average: "Average"
      }
    },
    
    ml: {
      app_title: "CAARS അഡൽറ്റ് ADHD ടെസ്റ്റ്",
      app_subtitle: "മുതിർന്നവരിലെ ADHD ലക്ഷണങ്ങൾ മനസ്സിലാക്കാനുള്ള പരിശോധന",
      
      // Stage 1: Setup
      setup_title: "ടെസ്റ്റിന് മുൻപുള്ള വിവരങ്ങൾ",
      setup_subtitle: "മുതിർന്നവരിലെ ADHD ലക്ഷണങ്ങൾ കൃത്യമായി വിലയിരുത്താനുള്ള 66 ചോദ്യങ്ങൾ അടങ്ങിയ ശാസ്ത്രീയ പരിശോധന.",
      form_type_label: "ആർക്കുവേണ്ടിയാണ് ഈ ടെസ്റ്റ് ചെയ്യുന്നത്? *",
      form_self: "എനിക്ക് വേണ്ടി (സ്വയം വിലയിരുത്താൻ — 66 ചോദ്യങ്ങൾ)",
      form_observer: "മറ്റൊരാൾക്ക് വേണ്ടി (കൂടെയുള്ള ആളെ വിലയിരുത്താൻ — 66 ചോദ്യങ്ങൾ)",
      gender_label: "ലിംഗം *",
      gender_male: "പുരുഷൻ",
      gender_female: "സ്ത്രീ",
      age_label: "പ്രായം *",
      age_18_29: "18 മുതൽ 29 വയസ്സ് വരെ",
      age_30_49: "30 മുതൽ 49 വയസ്സ് വരെ",
      age_50_plus: "50 വയസ്സോ അതിൽ കൂടുതലോ",
      rater_label: "ടെസ്റ്റ് ചെയ്യുന്ന ആളുടെ പേര് അല്ലെങ്കിൽ ബന്ധം (നിർബന്ധമില്ല)",
      rater_placeholder: "ഉദാ: സ്വന്തം പേര്, അല്ലെങ്കിൽ ഭാര്യ, ഭർത്താവ്, സുഹൃത്ത്",
      likert_guide_title: "ഉത്തരം നൽകേണ്ട രീതി",
      likert_guide_desc: "താഴെ പറയുന്ന ഓരോ കാര്യങ്ങളും നിങ്ങളുടെ നിത്യജീവിതത്തിൽ എത്രത്തോളം ഉണ്ടാകാറുണ്ട് എന്ന് തിരഞ്ഞെടുക്കുക:",
      likert_0_legend: "<strong>ഒട്ടുമില്ല</strong> (ഒരിക്കലും ഉണ്ടാകാറില്ല, അല്ലെങ്കിൽ വളരെ അപൂർവ്വമായി മാത്രം)",
      likert_1_legend: "<strong>കുറച്ചുമാത്രം</strong> (വല്ലപ്പോഴുമൊക്കെ ഉണ്ടാകാറുണ്ട്)",
      likert_2_legend: "<strong>പലപ്പോഴും</strong> (സാധാരണയായി പലപ്പോഴും ഉണ്ടാകാറുണ്ട്)",
      likert_3_legend: "<strong>എപ്പോഴും / വളരെ കൂടുതൽ</strong> (മിക്കവാറും ദിവസങ്ങളിൽ ഇടയ്ക്കിടെ ഉണ്ടാകാറുണ്ട്)",
      likert_0_desc: "ഒട്ടുമില്ല (0 പോയിന്റ്)",
      likert_1_desc: "കുറച്ചുമാത്രം (1 പോയിന്റ്)",
      likert_2_desc: "പലപ്പോഴും (2 പോയിന്റ്)",
      likert_3_desc: "എപ്പോഴും / വളരെ കൂടുതൽ (3 പോയിന്റ്)",
      offline_pill: "ഓഫ്‌ലൈനായി പ്രവർത്തിക്കുന്നു • വിവരങ്ങൾ സുരക്ഷിതം",
      btn_start_survey: "ചോദ്യങ്ങളിലേക്ക് കടക്കാം",
      
      // Stage 2: Survey
      section_label: "ഭാഗം",
      answered_counter: "66-ൽ {answered} ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകി",
      btn_prev: "മുൻപത്തെ",
      btn_next: "അടുത്തത്",
      btn_review: "ഉത്തരങ്ങൾ പരിശോധിക്കുക",
      
      // Likert Options
      likert_labels: [
        "ഒട്ടുമില്ല",
        "കുറച്ചുമാത്രം",
        "പലപ്പോഴും",
        "വളരെ കൂടുതൽ"
      ],
      
      // Stage 3: Review
      review_title: "ഉത്തരങ്ങൾ ഒന്നു തിരിഞ്ഞുനോക്കാം",
      review_subtitle: "ഫലങ്ങൾ കാണുന്നതിന് മുൻപ് എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകിയിട്ടുണ്ടോ എന്ന് ഉറപ്പുവരുത്തുക.",
      missing_title_alert: "{count} ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാൻ ബാക്കിയുണ്ട്",
      missing_desc_alert: "റിപ്പോർട്ട് കൃത്യമാകാൻ എല്ലാ 66 ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകേണ്ടതുണ്ട്. താഴെ കാണുന്ന നമ്പറുകളിൽ തൊട്ട് ബാക്കിയുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുക:",
      complete_title: "എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകിക്കഴിഞ്ഞു!",
      complete_desc: "എല്ലാ 66 ചോദ്യങ്ങൾക്കും ഉത്തരങ്ങൾ ലഭിച്ചു. ഇനി നിങ്ങളുടെ പരിശോധനാ ഫലങ്ങളും റിപ്പോർട്ടും കാണാം.",
      btn_review_back: "ചോദ്യങ്ങളിലേക്ക് തിരികെ പോകുക",
      btn_calculate_scores: "പരിശോധനാ ഫലങ്ങൾ കാണുക",
      
      // Stage 4: Results
      report_title: "CAARS പരിശോധനാ ഫലങ്ങൾ",
      meta_form: "ടെസ്റ്റ് രീതി",
      meta_norm_group: "വിഭാഗം",
      meta_rater: "ടെസ്റ്റ് ചെയ്തത്",
      meta_status: "ടെസ്റ്റ് നില",
      meta_status_value: "പൂർത്തിയായി",
      hero_title: "പ്രധാന കണ്ടെത്തലുകൾ",
      hero_subtitle: "ലക്ഷണങ്ങളുടെ തീവ്രത അളന്ന പ്രധാന സ്കോറുകൾ (ശരാശരി സ്കോർ = 50).",
      raw_score_prefix: "പോയിന്റ്:",
      table_title: "വിശദമായ സ്കോർ വിവരങ്ങൾ",
      table_subtitle: "8 ലക്ഷണ മേഖലകൾ (സ്കോർ 65-ന് മുകളിലാണെങ്കിൽ ലക്ഷണങ്ങൾ കൂടുതലാണെന്ന് അർത്ഥമാക്കുന്നു).",
      th_scale: "കോഡ്",
      th_description: "ലക്ഷണ വിഭാഗം",
      th_raw: "പോയിന്റ്",
      th_tscore: "ടി-സ്കോർ",
      th_classification: "തീവ്രത നില",
      btn_export_options: "റിപ്പോർട്ട് സേവ് ചെയ്യുക",
      btn_export_json_title: "JSON ഡൗൺലോഡ്",
      btn_export_json_desc: "എല്ലാ വിവരങ്ങളും അടങ്ങിയ ഡിജിറ്റൽ ഫയൽ",
      btn_export_csv_title: "CSV (എക്സെൽ ഫയൽ)",
      btn_export_csv_desc: "കമ്പ്യൂട്ടറിൽ എക്സെലിൽ കാണാൻ സാധിക്കുന്ന പട്ടിക",
      btn_print_report: "പ്രിന്റ് ചെയ്യുക / PDF ആക്കുക",
      btn_start_new: "ആദ്യം മുതൽ വീണ്ടും തുടങ്ങുക",
      modal_reset_title: "എല്ലാം മായ്ച്ച് പുതിയ ടെസ്റ്റ് തുടങ്ങണോ?",
      modal_reset_desc: "പുതിയ ടെസ്റ്റ് തുടങ്ങിയാൽ ഇപ്പോൾ നൽകിയ എല്ലാ ഉത്തരങ്ങളും സ്കോറുകളും മാഞ്ഞുപോകും. ഇത് പിന്നീട് തിരികെ എടുക്കാൻ കഴിയില്ല.",
      btn_modal_cancel: "വേണ്ട, ഇവിടെത്തന്നെ നിൽക്കാം",
      btn_modal_confirm: "അതെ, എല്ലാം മായ്ക്കുക",
      
      // Subscale Names
      scales: {
        A: "ശ്രദ്ധക്കുറവും മറവിയും (Inattention & Memory)",
        B: "ഇരിപ്പുറപ്പില്ലായ്മയും അമിത ചലനങ്ങളും (Hyperactivity)",
        C: "എടുത്തുചാട്ടവും വികാര നിയന്ത്രണമില്ലായ്മയും (Impulsivity)",
        D: "ആത്മവിശ്വാസക്കുറവ് (Self-Confidence Issues)",
        E: "ശ്രദ്ധ കേന്ദ്രീകരിക്കാനുള്ള ബുദ്ധിമുട്ട് (DSM-IV Inattention)",
        F: "അമിത വെപ്രാളവും എടുത്തുചാട്ടവും (DSM-IV Hyperactivity)",
        G: "ആകെ മൊത്തമുള്ള ലക്ഷണങ്ങൾ (DSM-IV Total)",
        H: "ADHD ഉണ്ടാകാനുള്ള സാധ്യത (ADHD Index)"
      },
      
      // Classifications
      classifications: {
        very_elevated: "വളരെ കൂടുതൽ (Very High)",
        elevated: "കൂടുതൽ (High)",
        borderline: "ശരാശരിയിലും അല്പം കൂടുതൽ (Borderline)",
        average: "സാധാരണ നിലയിൽ (Average)"
      }
    }
  };

  /**
   * Helper function to get localized string with replacement formatting.
   * Example: t('answered_counter', { answered: 10, total: 66 }, 'ml')
   */
  function t(key, params, lang) {
    const currentLang = lang || (typeof window !== 'undefined' && window.CAARS_ACTIVE_LANG) || 'en';
    const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.en;
    let str = dict[key] !== undefined ? dict[key] : (I18N_DICTIONARY.en[key] || key);

    if (params && typeof params === 'object') {
      Object.keys(params).forEach(k => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
      });
    }

    return str;
  }

  /**
   * Returns localized prompt for a question object.
   */
  function getQuestionText(question, formType, lang) {
    const currentLang = lang || (typeof window !== 'undefined' && window.CAARS_ACTIVE_LANG) || 'en';
    const isObserver = formType === 'CAARS-O:L';

    if (currentLang === 'ml') {
      if (isObserver && question.text_observer_ml) return question.text_observer_ml;
      if (!isObserver && question.text_self_ml) return question.text_self_ml;
    }

    return isObserver ? question.text_observer : question.text_self;
  }

  /**
   * Returns 4 Likert label texts for the current language.
   */
  function getLikertLabels(lang) {
    const currentLang = lang || (typeof window !== 'undefined' && window.CAARS_ACTIVE_LANG) || 'en';
    const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.en;
    return dict.likert_labels || I18N_DICTIONARY.en.likert_labels;
  }

  /**
   * Returns full HTML legend strings for the Likert guide (0 to 3)
   */
  function getLikertLegend(lang) {
    const currentLang = lang || (typeof window !== 'undefined' && window.CAARS_ACTIVE_LANG) || 'en';
    const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.en;
    return [
      dict.likert_0_legend,
      dict.likert_1_legend,
      dict.likert_2_legend,
      dict.likert_3_legend
    ];
  }

  const CAARS_I18N = {
    DICTIONARY: I18N_DICTIONARY,
    t: t,
    getQuestionText: getQuestionText,
    getLikertLabels: getLikertLabels,
    getLikertLegend: getLikertLegend
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CAARS_I18N;
  }
  if (typeof window !== 'undefined') {
    window.CAARS_I18N = CAARS_I18N;
    window.CAARS_ACTIVE_LANG = 'en';
  }
})();
