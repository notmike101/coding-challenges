/**
 * Find the Difference
 * https://leetcode.com/problems/find-the-difference/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 63ms - Beats 50.64%
 * Memory:  52.16 MB - Beats 52.23%
 */

import captureTestResults, { type ITest } from "../testControl.ts";

const findTheDifference = (s: string, t: string): string => {
  let missingCharCode = 0;

  for (const char of (s + t)) {
    missingCharCode ^= char.charCodeAt(0);
  }

  return String.fromCharCode(missingCharCode);
};

const tests: ITest[] = [
  { input: ['abcd', 'abcde'], expected: 'e', func: findTheDifference },
  { input: ['', 'y'], expected: 'y', func: findTheDifference },
];

console.table(captureTestResults(tests));
