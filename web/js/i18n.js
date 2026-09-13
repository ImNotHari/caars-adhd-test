/**
 * CAARS Clinical Suite - Internationalization (i18n) Module
 * English & Malayalam (മലയാളം) Full Clinical Translation Dictionary
 * Pure Client-Side, Zero External Dependencies.
 */

(function () {
  'use strict';

  const I18N_DICTIONARY = {
    en: {
      app_title: "CAARS Clinical Suite",
      app_subtitle: "Adult ADHD Assessment Platform",
      
      // Stage 1: Setup
      setup_title: "CAARS Clinical Protocol Setup",
      setup_subtitle: "Conners' Adult ADHD Rating Scales — Standardized 66-item clinical administration, normative T-score scoring, and inconsistency analysis.",
      form_type_label: "Protocol Form Type",
      form_self: "CAARS-S:L (Self-Report, Long Form — 66 Items)",
      form_observer: "CAARS-O:L (Observer-Report, Long Form — 66 Items)",
      gender_label: "Respondent Gender",
      gender_male: "Male",
      gender_female: "Female",
      age_label: "Normative Age Bracket",
      age_18_29: "18–29 Years",
      age_30_49: "30–49 Years",
      age_50_plus: "50+ Years",
      rater_label: "Respondent / Rater Identifier (Optional)",
      rater_placeholder: "e.g., Self, Spouse, Parent, Clinical Observer",
      likert_guide_title: "Standard 4-Point Likert Rating Guide",
      likert_guide_desc: "Read each item carefully and indicate how often you (or the person you are rating) experience the described behavior in daily life:",
      likert_0_legend: "<strong>Not at all, never</strong> (Rarely or never occurs)",
      likert_1_legend: "<strong>Just a little</strong> (Once in a while)",
      likert_2_legend: "<strong>Pretty much</strong> (Often, quite a bit)",
      likert_3_legend: "<strong>Very much</strong> (Very frequently)",
      likert_0_desc: "Not at all, never (Rarely or never occurs)",
      likert_1_desc: "Just a little (Occurs occasionally)",
      likert_2_desc: "Pretty much, often (Occurs frequently)",
      likert_3_desc: "Very much, very frequently (Occurs almost constantly)",
      offline_pill: "Offline Ready • Volatile Memory",
      btn_start_survey: "Begin Questionnaire",
      
      // Stage 2: Survey
      section_label: "Section",
      answered_counter: "{answered} of {total} Answered",
      btn_prev: "Previous Section",
      btn_next: "Next Section",
      btn_review: "Review & Validate Protocol",
      btn_prefill_demo: "Prefill Demo Data (All 66 Items)",
      
      // Likert Options
      likert_labels: [
        "Not at all, never",
        "Just a little",
        "Pretty much, often",
        "Very much"
      ],
      
      // Stage 3: Review
      review_title: "Protocol Validation & Completeness Check",
      review_subtitle: "Review your responses across all 7 clinical sections before scoring.",
      missing_title_alert: "INCOMPLETE PROTOCOL: {count} Unanswered Items",
      missing_desc_alert: "Psychometric standards require 100% item completion. Prorating missing items is clinically impermissible. Please click on any item below to jump directly to it and provide an answer.",
      complete_title: "PROTOCOL COMPLETE & READY FOR SCORING",
      complete_desc: "All 66 psychometric items have been answered with valid responses. Proceed to execute the standardized scoring algorithm and generate the clinical diagnostic report.",
      btn_review_back: "Return to Questionnaire",
      btn_calculate_scores: "Calculate Clinical Scores",
      
      // Stage 4: Results
      report_title: "CAARS Clinical Assessment Report",
      meta_form: "Protocol Form",
      meta_norm_group: "Normative Group",
      meta_rater: "Rater Identifier",
      meta_status: "Protocol Status",
      meta_status_value: "Complete & Scored",
      hero_title: "Primary Clinical Diagnostic Scores",
      hero_subtitle: "Core symptom indicators and standardized normative standard T-scores (Mean = 50, SD = 10).",
      raw_score_prefix: "Raw Score:",
      table_title: "Complete Standardized Subscale Findings",
      table_subtitle: "All 8 diagnostic and symptom dimensions (T-Score ≥ 65 denotes clinically significant elevation).",
      th_scale: "Scale",
      th_description: "Subscale Description",
      th_raw: "Raw Score",
      th_tscore: "Standard T",
      th_classification: "Classification",
      btn_export_options: "Export Options",
      btn_export_json_title: "Export JSON",
      btn_export_json_desc: "Complete protocol, raw responses, and score results",
      btn_export_csv_title: "Export CSV",
      btn_export_csv_desc: "Subscale findings table for Excel / analysis",
      btn_print_report: "Print / PDF Report",
      btn_start_new: "Start New Assessment",
      modal_reset_title: "Clear & Start New Assessment?",
      modal_reset_desc: "Starting a new assessment will immediately clear all current responses and calculations. Because this application operates strictly in volatile offline memory, this action cannot be undone.",
      btn_modal_cancel: "Cancel",
      btn_modal_confirm: "Clear & Start Over",
      
      // Subscale Names
      scales: {
        A: "Inattention / Memory Problems",
        B: "Hyperactivity / Restlessness",
        C: "Impulsivity / Emotional Lability",
        D: "Problems with Self-Concept",
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
      app_title: "CAARS ക്ലിനിക്കൽ സ്യൂട്ട്",
      app_subtitle: "മുതിർന്നവരിലെ ADHD നിർണ്ണയ പ്ലാറ്റ്ഫോം",
      
      // Stage 1: Setup
      setup_title: "CAARS ക്ലിനിക്കൽ പ്രോട്ടോക്കോൾ ക്രമീകരണം",
      setup_subtitle: "കോണേഴ്സ് അഡൽറ്റ് എഡിഎച്ച്ഡി റേറ്റിംഗ് സ്കെയിൽ (CAARS) — 66 ചോദ്യങ്ങൾ അടങ്ങിയ ശാസ്ത്രീയ പരിശോധനയും സ്റ്റാൻഡേർഡ് ടി-സ്കോർ നിർണ്ണയവും.",
      form_type_label: "പ്രോട്ടോക്കോൾ ഫോം തിരഞ്ഞെടുക്കുക *",
      form_self: "CAARS-S:L (സ്വയം വിലയിരുത്തൽ, ദീർഘ രൂപം — 66 ചോദ്യങ്ങൾ)",
      form_observer: "CAARS-O:L (നിരീക്ഷക വിലയിരുത്തൽ, ദീർഘ രൂപം — 66 ചോദ്യങ്ങൾ)",
      gender_label: "ലിംഗവിഭാഗം (നോർമേറ്റീവ് ഗ്രൂപ്പ്) *",
      gender_male: "പുരുഷൻ (Male)",
      gender_female: "സ്ത്രീ (Female)",
      age_label: "പ്രായപരിധി (നോർമേറ്റീവ് ഗ്രൂപ്പ്) *",
      age_18_29: "18–29 വയസ്സ്",
      age_30_49: "30–49 വയസ്സ്",
      age_50_plus: "50 വയസ്സിന് മുകളിൽ",
      rater_label: "വിലയിരുത്തുന്ന ആളുടെ വിവരണം (ഐച്ഛികം)",
      rater_placeholder: "ഉദാ: സ്വയം, പങ്കാളി, മാതാപിതാക്കൾ, സഹപ്രവർത്തകൻ",
      likert_guide_title: "സ്റ്റാൻഡേർഡ് 4-പോയിന്റ് ലൈക്കർട്ട് റേറ്റിംഗ് ഗൈഡ്",
      likert_guide_desc: "ഓരോ പ്രസ്താവനയും ശ്രദ്ധാപൂർവ്വം വായിച്ച്, വിവരിച്ചിരിക്കുന്ന സ്വഭാവം ദൈനംദിന ജീവിതത്തിൽ എത്രത്തോളം അനുഭവപ്പെടുന്നു എന്ന് രേഖപ്പെടുത്തുക:",
      likert_0_legend: "<strong>ഒട്ടുമില്ല, ഒരിക്കലുമില്ല</strong> (അപൂർവ്വമായി മാത്രം അല്ലെങ്കിൽ ഒരിക്കലുമില്ല)",
      likert_1_legend: "<strong>കുറച്ച് മാത്രം</strong> (വല്ലപ്പോഴും ഒരിക്കൽ)",
      likert_2_legend: "<strong>കാര്യമായിട്ടുണ്ട്</strong> (പലപ്പോഴും, അത്യാവശ്യം കൂടുതൽ)",
      likert_3_legend: "<strong>വളരെ കൂടുതൽ</strong> (നിരന്തരം, മിക്കപ്പോഴും)",
      likert_0_desc: "ഒട്ടുമില്ല, ഒരിക്കലുമില്ല (0 പോയിന്റ്)",
      likert_1_desc: "കുറച്ച് മാത്രം (1 പോയിന്റ്)",
      likert_2_desc: "കാര്യമായിട്ടുണ്ട് (2 പോയിന്റ്)",
      likert_3_desc: "വളരെ കൂടുതൽ (3 പോയിന്റ്)",
      offline_pill: "ഓഫ്‌ലൈൻ സജ്ജം • താൽക്കാലിക മെമ്മറി",
      btn_start_survey: "ചോദ്യാവലി ആരംഭിക്കുക",
      
      // Stage 2: Survey
      section_label: "വിഭാഗം",
      answered_counter: "66-ൽ {answered} എണ്ണം പൂർത്തിയായി",
      btn_prev: "മുൻപത്തെ വിഭാഗം",
      btn_next: "അടുത്ത വിഭാഗം",
      btn_review: "പരിശോധിച്ചു പൂർത്തിയാക്കുക",
      btn_prefill_demo: "ഡെമോ ഉത്തരങ്ങൾ നൽകുക (66 എണ്ണം)",
      
      // Likert Options
      likert_labels: [
        "ഒട്ടുമില്ല, ഒരിക്കലുമില്ല",
        "കുറച്ച് മാത്രം",
        "കാര്യമായിട്ടുണ്ട്",
        "വളരെ കൂടുതൽ"
      ],
      
      // Stage 3: Review
      review_title: "പ്രോട്ടോക്കോൾ പൂർണ്ണതാ പരിശോധന",
      review_subtitle: "സ്കോറുകൾ കണക്കാക്കുന്നതിന് മുൻപ് എല്ലാ 7 വിഭാഗങ്ങളിലെയും ഉത്തരങ്ങൾ പരിശോധിക്കുക.",
      missing_title_alert: "പൂർത്തിയാകാത്ത പ്രോട്ടോക്കോൾ: {count} ചോദ്യങ്ങൾക്ക് ഉത്തരമില്ല",
      missing_desc_alert: "കൃത്യമായ സ്കോറിംഗിന് എല്ലാ 66 ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകേണ്ടതുണ്ട്. വിട്ടുപോയ ചോദ്യങ്ങളിൽ ക്ലിക്ക് ചെയ്ത് ഉത്തരം രേഖപ്പെടുത്തുക.",
      complete_title: "പ്രോട്ടോക്കോൾ പൂർത്തിയായി, സ്കോറുകൾ പരിശോധിക്കാം",
      complete_desc: "എല്ലാ 66 ചോദ്യങ്ങൾക്കും ഉത്തരങ്ങൾ രേഖപ്പെടുത്തിയിട്ടുണ്ട്. ക്ലിനിക്കൽ സ്കോറിംഗ് ആരംഭിച്ച് റിപ്പോർട്ട് കാണാൻ താഴെയുള്ള ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.",
      btn_review_back: "ചോദ്യങ്ങളിലേക്ക് മടങ്ങുക",
      btn_calculate_scores: "ക്ലിനിക്കൽ സ്കോറുകൾ കണക്കാക്കുക",
      
      // Stage 4: Results
      report_title: "CAARS ക്ലിനിക്കൽ അസസ്സ്മെന്റ് റിപ്പോർട്ട്",
      meta_form: "പ്രോട്ടോക്കോൾ ഫോം",
      meta_norm_group: "നോർമേറ്റീവ് വിഭാഗം",
      meta_rater: "വിലയിരുത്തിയ ആൾ",
      meta_status: "പ്രോട്ടോക്കോൾ നില",
      meta_status_value: "പൂർത്തിയായി സ്കോർ ചെയ്തു",
      hero_title: "പ്രധാന ക്ലിനിക്കൽ ഡയഗ്നോസ്റ്റിക് സ്കോറുകൾ",
      hero_subtitle: "പ്രധാന ലക്ഷണ സൂചകങ്ങളും മാനകീകരിച്ച ടി-സ്കോറുകളും (Mean = 50, SD = 10).",
      raw_score_prefix: "റോ സ്കോർ:",
      table_title: "പൂർണ്ണമായ സബ്സ്കെയിൽ ഫലങ്ങൾ",
      table_subtitle: "എല്ലാ 8 മാനസിക രോഗലക്ഷണ സൂചികകളും (ടി-സ്കോർ ≥ 65 ക്ലിനിക്കൽ പ്രാധാന്യമുള്ള ഉയർച്ചയെ കാണിക്കുന്നു).",
      th_scale: "സ്കെയിൽ",
      th_description: "സബ്സ്കെയിൽ വിവരണം",
      th_raw: "റോ സ്കോർ",
      th_tscore: "സ്റ്റാൻഡേർഡ് ടി",
      th_classification: "വർഗ്ഗീകരണം",
      btn_export_options: "എക്സ്പോർട്ട് ഓപ്ഷനുകൾ",
      btn_export_json_title: "JSON ഫയൽ ഡൗൺലോഡ്",
      btn_export_json_desc: "മുഴുവൻ വിവരങ്ങളും ഉത്തരങ്ങളും സ്കോറുകളും അടങ്ങിയ JSON",
      btn_export_csv_title: "CSV സ്പ്രെഡ്ഷീറ്റ്",
      btn_export_csv_desc: "എക്സെൽ പരിശോധനയ്ക്കുള്ള ഫലങ്ങളുടെ പട്ടിക",
      btn_print_report: "പ്രിന്റ് / PDF റിപ്പോർട്ട്",
      btn_start_new: "പുതിയ പരിശോധന ആരംഭിക്കുക",
      modal_reset_title: "പുതിയ പരിശോധന ആരംഭിക്കണോ?",
      modal_reset_desc: "പുതിയ പരിശോധന ആരംഭിച്ചാൽ നിലവിലെ ഉത്തരങ്ങളും സ്കോറുകളും പൂർണ്ണമായി നീക്കം ചെയ്യപ്പെടും. വിവരങ്ങൾ കമ്പ്യൂട്ടർ മെമ്മറിയിൽ മാത്രമായതിനാൽ ഇത് പുനഃസ്ഥാപിക്കാൻ സാധിക്കില്ല.",
      btn_modal_cancel: "റദ്ദാക്കുക",
      btn_modal_confirm: "തുടച്ചുനീക്കി വീണ്ടും തുടങ്ങുക",
      
      // Subscale Names
      scales: {
        A: "ശ്രദ്ധക്കുറവ് / ഓർമ്മക്കുറവ്",
        B: "അമിത ചലനാത്മകത / അസ്വസ്ഥത",
        C: "എടുത്തുചാട്ടം / വികാര നിയന്ത്രണമില്ലായ്മ",
        D: "ആത്മവിശ്വാസക്കുറവ് (Self-Concept പ്രശ്നങ്ങൾ)",
        E: "DSM-IV ശ്രദ്ധക്കുറവ് ലക്ഷണങ്ങൾ",
        F: "DSM-IV ഹൈപ്പർആക്ടീവ് ലക്ഷണങ്ങൾ",
        G: "DSM-IV മൊത്തം ലക്ഷണങ്ങൾ",
        H: "ADHD സൂചിക (ADHD Index)"
      },
      
      // Classifications
      classifications: {
        very_elevated: "വളരെ കൂടുതൽ (Very Elevated)",
        elevated: "കൂടുതൽ (Elevated)",
        borderline: "അതിർത്തിയിൽ (Borderline)",
        average: "സാധാരണ നില (Average)"
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
