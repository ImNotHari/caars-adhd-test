/**
 * Test: Inconsistency Index Pairings and Exact Cutoff Boundaries.
 * Run with: node tests/test_inconsistency.js
 */

const assert = require('assert');
const scoring = require('../web/js/scoring.js');
const { INCONSISTENCY_PAIRS } = require('../web/js/questions.js');

console.log('Running test_inconsistency.js...');

// 1. Verify 8 pairs exist and match requirement.md
const EXPECTED_PAIRS = [
  [1, 28], [5, 42], [9, 36], [14, 52], [18, 61], [22, 48], [25, 59], [31, 64]
];

assert.strictEqual(INCONSISTENCY_PAIRS.length, 8, 'Must have exactly 8 inconsistency pairs');
for (let i = 0; i < 8; i++) {
  assert.strictEqual(INCONSISTENCY_PAIRS[i][0], EXPECTED_PAIRS[i][0]);
  assert.strictEqual(INCONSISTENCY_PAIRS[i][1], EXPECTED_PAIRS[i][1]);
}
console.log('  ✓ Inconsistency pair IDs verified against psychometric standard');

// 2. Test zero discordance (all identical responses)
const uniformResp = {};
for (let i = 1; i <= 66; i++) uniformResp[i] = 2;

const incZero = scoring.computeInconsistencyIndex(uniformResp);
assert.strictEqual(incZero.score, 0);
assert.strictEqual(incZero.flag, false);
assert.strictEqual(incZero.status, 'Valid');
console.log('  ✓ Zero discordance vector: INC = 0 (Valid)');

// 3. Test exact boundary INC = 7 (Valid Protocol)
// 7 pairs with diff=1, 1 pair with diff=0 -> sum = 7
const resp7 = {};
for (let i = 1; i <= 66; i++) resp7[i] = 0;

for (let k = 0; k < 7; k++) {
  const q1 = INCONSISTENCY_PAIRS[k][0];
  const q2 = INCONSISTENCY_PAIRS[k][1];
  resp7[q1] = 1;
  resp7[q2] = 0; // diff = 1
}
const inc7 = scoring.computeInconsistencyIndex(resp7);
assert.strictEqual(inc7.score, 7);
assert.strictEqual(inc7.flag, false, 'INC = 7 must NOT be flagged');
assert.strictEqual(inc7.status, 'Valid');
console.log('  ✓ Boundary condition INC = 7: Valid (Cutoff strictly >= 8)');

// 4. Test exact boundary INC = 8 (Inconsistent Protocol)
// 8 pairs with diff=1 -> sum = 8
const resp8 = {};
for (let i = 1; i <= 66; i++) resp8[i] = 0;

for (let k = 0; k < 8; k++) {
  const q1 = INCONSISTENCY_PAIRS[k][0];
  const q2 = INCONSISTENCY_PAIRS[k][1];
  resp8[q1] = 1;
  resp8[q2] = 0; // diff = 1
}
const inc8 = scoring.computeInconsistencyIndex(resp8);
assert.strictEqual(inc8.score, 8);
assert.strictEqual(inc8.flag, true, 'INC = 8 MUST be flagged as inconsistent');
assert.strictEqual(inc8.status, 'Inconsistent');
console.log('  ✓ Boundary condition INC = 8: Flagged Inconsistent (Cutoff met)');

// 5. Test maximum discordance (all 8 pairs with |3 - 0| = 3 -> sum = 24)
const respMax = {};
for (let i = 1; i <= 66; i++) respMax[i] = 0;
for (const [q1, q2] of INCONSISTENCY_PAIRS) {
  respMax[q1] = 3;
  respMax[q2] = 0;
}
const incMax = scoring.computeInconsistencyIndex(respMax);
assert.strictEqual(incMax.score, 24);
assert.strictEqual(incMax.flag, true);
console.log('  ✓ Maximum discordance vector: INC = 24 (Flagged)');

console.log('ALL INCONSISTENCY TESTS PASSED [OK]\n');
