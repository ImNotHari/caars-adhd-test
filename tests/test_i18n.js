const assert = require('assert');
const { CAARS_QUESTIONS } = require('../web/js/questions.js');
const CAARS_I18N = require('../web/js/i18n.js');
const CAARS_SCORING = require('../web/js/scoring.js');

console.log('Running test_i18n.js...');

// 1. Check all 66 items have Malayalam Self & Observer text
assert.strictEqual(CAARS_QUESTIONS.length, 66, 'Must contain exactly 66 questions');

const malayalamUnicodeRegex = /[\u0D00-\u0D7F]/;

CAARS_QUESTIONS.forEach(q => {
  assert(typeof q.id === 'number', `Question ${q.id}: id must be number`);
  assert(q.text_self && q.text_self.trim().length > 0, `Question ${q.id}: text_self missing`);
  assert(q.text_observer && q.text_observer.trim().length > 0, `Question ${q.id}: text_observer missing`);
  
  assert(q.text_self_ml && q.text_self_ml.trim().length > 0, `Question ${q.id}: text_self_ml missing`);
  assert(q.text_observer_ml && q.text_observer_ml.trim().length > 0, `Question ${q.id}: text_observer_ml missing`);
  
  assert(malayalamUnicodeRegex.test(q.text_self_ml), `Question ${q.id}: text_self_ml must contain Malayalam characters`);
  assert(malayalamUnicodeRegex.test(q.text_observer_ml), `Question ${q.id}: text_observer_ml must contain Malayalam characters`);
});
console.log('  [OK] All 66 questions verified with valid Malayalam Self & Observer translations');

// 2. Likert options test
const enLikert = CAARS_I18N.getLikertLabels('en');
const mlLikert = CAARS_I18N.getLikertLabels('ml');

assert.strictEqual(enLikert.length, 4, 'English Likert options must be 4');
assert.strictEqual(mlLikert.length, 4, 'Malayalam Likert options must be 4');

mlLikert.forEach((lbl, idx) => {
  assert(malayalamUnicodeRegex.test(lbl), `Malayalam Likert option ${idx} must contain Malayalam script`);
});
console.log('  [OK] Likert 4-point rating labels verified for both languages');

// 3. Question Text Helper test
const q1 = CAARS_QUESTIONS[0];
assert.strictEqual(CAARS_I18N.getQuestionText(q1, 'CAARS-S:L', 'en'), q1.text_self);
assert.strictEqual(CAARS_I18N.getQuestionText(q1, 'CAARS-O:L', 'en'), q1.text_observer);
assert.strictEqual(CAARS_I18N.getQuestionText(q1, 'CAARS-S:L', 'ml'), q1.text_self_ml);
assert.strictEqual(CAARS_I18N.getQuestionText(q1, 'CAARS-O:L', 'ml'), q1.text_observer_ml);
console.log('  [OK] getQuestionText helper correctly handles Self/Observer and EN/ML dispatch');

// 4. Translation parameter replacement test
const counterMl = CAARS_I18N.t('answered_counter', { answered: 24, total: 66 }, 'ml');
assert(counterMl.includes('24') && counterMl.includes('66'), 'Counter parameter replacement failed');
assert(malayalamUnicodeRegex.test(counterMl), 'Counter must contain Malayalam script');
// 4.5. Likert Legend and Setup Options tests
const enLegend = CAARS_I18N.getLikertLegend('en');
const mlLegend = CAARS_I18N.getLikertLegend('ml');
assert.strictEqual(enLegend.length, 4, 'English Likert legend must have 4 entries');
assert.strictEqual(mlLegend.length, 4, 'Malayalam Likert legend must have 4 entries');
mlLegend.forEach((item, idx) => {
  assert(malayalamUnicodeRegex.test(item), `Malayalam legend item ${idx} must contain Malayalam characters`);
  assert(item.includes('<strong>'), `Malayalam legend item ${idx} must include <strong> formatting`);
});
assert(malayalamUnicodeRegex.test(CAARS_I18N.t('form_self', null, 'ml')), 'Form self must have Malayalam translation');
assert(malayalamUnicodeRegex.test(CAARS_I18N.t('gender_male', null, 'ml')), 'Gender male must have Malayalam translation');
assert(malayalamUnicodeRegex.test(CAARS_I18N.t('age_18_29', null, 'ml')), 'Age bracket must have Malayalam translation');
console.log('  [OK] Likert legend and setup options translations verified');

// 5. Invariant: Scoring is language-agnostic
const responses = {};
for (let i = 1; i <= 66; i++) {
  responses[i] = (i % 4);
}
const res = CAARS_SCORING.evaluateAssessment(responses, 'CAARS-S:L', 'Male', '18-29');
assert.strictEqual(res.is_scorable, true, 'Scoring must pass for complete response vector');
assert.strictEqual(res.scores.length, 8, 'Must return 8 subscales');
console.log('  [OK] Language-agnostic scoring invariant verified');

console.log('ALL I18N TESTS PASSED [OK]\n');
