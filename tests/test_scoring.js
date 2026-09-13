/**
 * Test: Subscale Raw Scoring and Scale G Rule.
 * Run with: node tests/test_scoring.js
 */

const assert = require('assert');
const scoring = require('../web/js/scoring.js');
const { CAARS_QUESTIONS } = require('../web/js/questions.js');

console.log('Running test_scoring.js...');

// 1. Verify total item counts
assert.strictEqual(CAARS_QUESTIONS.length, 66, 'Must have exactly 66 questions');

// 2. Verify subscale counts in verified dataset
const counts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, H: 0 };
for (const q of CAARS_QUESTIONS) {
  for (const s of q.scales) {
    if (counts[s] !== undefined) counts[s]++;
  }
}

assert.strictEqual(counts.A, 19, 'Scale A has 19 tagged items');
assert.strictEqual(counts.B, 16, 'Scale B has 16 tagged items');
assert.strictEqual(counts.C, 17, 'Scale C has 17 tagged items');
assert.strictEqual(counts.D, 14, 'Scale D has 14 tagged items');
assert.strictEqual(counts.E, 13, 'Scale E has 13 tagged items');
assert.strictEqual(counts.F, 12, 'Scale F has 12 tagged items');
assert.strictEqual(counts.H, 14, 'Scale H has 14 tagged items');
console.log('  ✓ Item count verification passed (A:19, B:16, C:17, D:14, E:13, F:12, H:14)');

// 3. Test Raw Score Summation with all 1s
const allOnes = {};
for (let i = 1; i <= 66; i++) allOnes[i] = 1;

const rawOnes = scoring.computeRawScores(allOnes);
assert.strictEqual(rawOnes.A, 19);
assert.strictEqual(rawOnes.B, 16);
assert.strictEqual(rawOnes.C, 17);
assert.strictEqual(rawOnes.D, 14);
assert.strictEqual(rawOnes.E, 13);
assert.strictEqual(rawOnes.F, 12);
assert.strictEqual(rawOnes.G, 25, 'Scale G must be E + F = 13 + 12 = 25');
assert.strictEqual(rawOnes.H, 14);
console.log('  ✓ Raw score summation for uniform response vector passed');

// 4. Test Scale G sum rule with arbitrary responses
const mixedResponses = {};
for (let i = 1; i <= 66; i++) mixedResponses[i] = (i % 4);

const rawMixed = scoring.computeRawScores(mixedResponses);
assert.strictEqual(rawMixed.G, rawMixed.E + rawMixed.F, 'Scale G must strictly equal E + F');
console.log('  ✓ Scale G = E + F mathematical invariant verified');

// 5. Test evaluateAssessment result structure and versioning
const evalResult = scoring.evaluateAssessment(allOnes, 'CAARS-S:L', 'Male', '18-29');
assert.strictEqual(evalResult.status, 'complete');
assert.strictEqual(evalResult.is_scorable, true);
assert.strictEqual(evalResult.app_version, '2.0.0');
assert.strictEqual(evalResult.scoring_version, '2.0.0');
assert.strictEqual(evalResult.scores.length, 8);
assert(evalResult.timestamp);
console.log('  ✓ Evaluation result structure and version metadata verified');

console.log('ALL SCORING TESTS PASSED [OK]\n');
