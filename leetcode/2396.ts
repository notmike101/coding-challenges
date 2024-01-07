/**
 * Strictly Palindromic Number
 * https://leetcode.com/problems/strictly-palindromic-number/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms - Beats 60.58%
 * Memory:  43.20 MB - Beats 9.49%
 */

import { captureTestResults, type ITest } from "../testControl.ts";

const isStrictlyPalindromic = (n: number): boolean => {
  let returnValue = true;

  for (let i = 2; i < n - 1; ++i) {
    if (returnValue === false) break;
    const res = n.toString(i);

    for (let j = 0, n = res.length - 1; j <=n; ++j, --n) {
      if (res[j] !== res[n]) {
        returnValue = false;
        break;
      }
    }
  }

  return returnValue;
};

const tests: ITest[] = [
  { input: 9, expected: false, func: isStrictlyPalindromic },
  { input: 4, expected: false, func: isStrictlyPalindromic },
];

console.table(captureTestResults(tests));