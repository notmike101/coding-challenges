/**
 * Find the Difference
 * https://leetcode.com/problems/find-the-difference/submissions/1282111883/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 71ms - Beats 16.14% (Invalid)
 * Memory:  51.15 MB - Beats 98.10%
 * 
 * Note: Runtime marked as invalid because there's no possible way that this is slower than 2+ loops. I blame this poor
 * score on leetcode inaccuracy
 */

import captureTestResults, { type ITest } from "../testControl.ts";

const findTheDifference = (s: string, t: string): string => {
  const st = s + t;
  let missingCharCode = 0,
      i = st.length - 1;

  for (; i >= 0; --i) {
    missingCharCode ^= st.charCodeAt(i);
  }

  return String.fromCharCode(missingCharCode);
};

const tests: ITest[] = [
  { input: ['abcd', 'abcde'], expected: 'e', func: findTheDifference },
  { input: ['', 'y'], expected: 'y', func: findTheDifference },
];

console.table(captureTestResults(tests));
