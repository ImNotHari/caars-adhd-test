/**
 * Test: Psychometric Boundary Values, Threshold Transitions, and Missing Response Handling.
 * Run with: node tests/test_boundaries.js
 */

const assert = require('assert');
const scoring = require('../web/js/scoring.js');

console.log('Running test_boundaries.js...');

// 1. Minimum Possible Score (all 0s)
const allZeros = {};
for (let i = 1; i <= 66; i++) allZeros[i] = 0;

const minEval = scoring.evaluateAssessment(allZeros, 'CAARS-S:L', 'Male', '18-29');
assert.strictEqual(minEval.status, 'complete');
assert.strictEqual(minEval.is_scorable, true);

for (const s of minEval.scores) {
  assert.strictEqual(s.raw_score, 0, `Raw score must be 0 for scale ${s.scale_code}`);
  assert(s.t_score >= 30, `T-score ${s.t_score} must be >= 30`);
  assert.strictEqual(s.classification, 'Average', `Scale ${s.scale_code} should be Average`);
}
console.log('  ✓ Minimum score boundary (all 0s) verified: clamped >= 30, all classified Average');

// 2. Maximum Possible Score (all 3s)
const allThrees = {};
for (let i = 1; i <= 66; i++) allThrees[i] = 3;

const maxEval = scoring.evaluateAssessment(allThrees, 'CAARS-S:L', 'Female', '30-49');
assert.strictEqual(maxEval.status, 'complete');
assert.strictEqual(maxEval.is_scorable, true);

for (const s of maxEval.scores) {
  assert(s.raw_score >= s.max_raw, `Raw score (${s.raw_score}) must be >= max_raw (${s.max_raw}) for scale ${s.scale_code}`);
  assert(s.t_score <= 90, `T-score ${s.t_score} must be <= 90`);
  assert.strictEqual(s.classification, 'Very Elevated', `Scale ${s.scale_code} should be Very Elevated`);
}
console.log('  ✓ Maximum score boundary (all 3s) verified: clamped <= 90, all classified Very Elevated');

// 3. Clinical Classification Transition Boundaries
const tier59 = scoring.classifyTScore(59);
assert.strictEqual(tier59.classification, 'Average', 'T=59 must be Average');

const tier60 = scoring.classifyTScore(60);
assert.strictEqual(tier60.classification, 'Borderline', 'T=60 must be Borderline');

const tier64 = scoring.classifyTScore(64);
assert.strictEqual(tier64.classification, 'Borderline', 'T=64 must be Borderline');

const tier65 = scoring.classifyTScore(65);
assert.strictEqual(tier65.classification, 'Elevated', 'T=65 must be Elevated');

const tier69 = scoring.classifyTScore(69);
assert.strictEqual(tier69.classification, 'Elevated', 'T=69 must be Elevated');

const tier70 = scoring.classifyTScore(70);
assert.strictEqual(tier70.classification, 'Very Elevated', 'T=70 must be Very Elevated');

const tier85 = scoring.classifyTScore(85);
assert.strictEqual(tier85.classification, 'Very Elevated', 'T=85 must be Very Elevated');
console.log('  ✓ Clinical classification boundaries verified (T=59/60, 64/65, 69/70)');

// 4. Missing Response Handling (Incomplete Protocol)
// Case A: Missing exactly item 42
const missingOne = { ...allZeros };
delete missingOne[42];

const resOne = scoring.evaluateAssessment(missingOne, 'CAARS-S:L', 'Male', '18-29');
assert.strictEqual(resOne.status, 'incomplete', 'Should be incomplete when 1 item is missing');
assert.strictEqual(resOne.is_scorable, false, 'Scoring must be blocked when item missing');
assert.strictEqual(resOne.missing_count, 1);
assert.deepStrictEqual(resOne.missing_ids, [42]);
console.log('  ✓ Missing single response correctly blocked from scoring (Item 42 identified)');

// Case B: Missing 5 items (7, 14, 21, 28, 35)
const missingFive = { ...allZeros };
delete missingFive[7];
delete missingFive[14];
delete missingFive[21];
delete missingFive[28];
delete missingFive[35];

const resFive = scoring.evaluateAssessment(missingFive, 'CAARS-O:L', 'Female', '50+');
assert.strictEqual(resFive.status, 'incomplete');
assert.strictEqual(resFive.missing_count, 5);
assert.deepStrictEqual(resFive.missing_ids, [7, 14, 21, 28, 35]);
console.log('  ✓ Multiple missing responses correctly enumerated (5 missing items detected)');

console.log('ALL BOUNDARY TESTS PASSED [OK]\n');
