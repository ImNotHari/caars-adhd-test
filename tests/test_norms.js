/**
 * Test: Deterministic Norm Table Matrix Validation.
 * Run with: node tests/test_norms.js
 */

const assert = require('assert');
const scoring = require('../web/js/scoring.js');
const { CAARS_NORMS } = require('../web/js/norms.js');

console.log('Running test_norms.js...');

const forms = ['self', 'observer'];
const genders = ['Male', 'Female'];
const ages = ['18-29', '30-49', '50+'];
const scales = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let totalCombinations = 0;
let totalLookups = 0;

for (const form of forms) {
  for (const gender of genders) {
    for (const age of ages) {
      for (const scale of scales) {
        totalCombinations++;

        // 1. Verify path exists in CAARS_NORMS
        const table = CAARS_NORMS[form]?.[gender]?.[age]?.[scale];
        assert(table, `Missing norm table for ${form} / ${gender} / ${age} / ${scale}`);
        assert(table.max_raw > 0, `Table max_raw must be > 0 for ${scale}`);
        assert(table.cohort_mean > 0, `Table cohort_mean must be > 0 for ${scale}`);
        assert(table.cohort_sd > 0, `Table cohort_sd must be > 0 for ${scale}`);

        // 2. Test lookupNorm across all raw scores from 0 to max_raw
        for (let raw = 0; raw <= table.max_raw; raw++) {
          totalLookups++;
          const res = scoring.lookupNorm(form, gender, age, scale, raw);

          assert.strictEqual(typeof res.t_score, 'number', `T-score must be a number for raw=${raw}`);
          assert(Number.isInteger(res.t_score), `T-score must be an integer, got ${res.t_score}`);
          assert(res.t_score >= 30 && res.t_score <= 90, `T-score ${res.t_score} out of bounds [30, 90]`);

          assert.strictEqual(typeof res.percentile, 'number', `Percentile must be a number for raw=${raw}`);
          assert(res.percentile >= 0.1 && res.percentile <= 99.9, `Percentile ${res.percentile} out of bounds [0.1, 99.9]`);
        }
      }
    }
  }
}

console.log(`  ✓ Successfully verified all ${totalCombinations} demographic/scale combinations`);
console.log(`  ✓ Tested ${totalLookups} individual raw-to-T-score points with zero lookup failures`);
console.log('ALL NORM TABLE TESTS PASSED [OK]\n');
