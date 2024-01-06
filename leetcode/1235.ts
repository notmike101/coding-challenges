/**
 * Find The Original Array of Prefix Xor
 * https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/
 * Mike Orozco (notmike101)
 * 
 * Leetcode has terrible analysis, this is same as all top answers
 * Runtime: 175ms - Beats 28.21%
 * Memory:  67.56 MB - Beats 35.04%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const findArray = (pref: number[]): number[] => {
  if (pref.length === 1) return pref;

  const output = [pref[0]];

  for (let i = 1; i < pref.length; ++i) {
    output.push(pref[i] ^ pref[i - 1]);
  }

  return output;
};

const tests: ITest[] = [
  { input: [[5,2,0,3,1]], expected: [5,7,2,3,2], func: findArray },
  { input: [[13]], expected: [13], func: findArray },
];

console.table(captureTestResults(tests));
