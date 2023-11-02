/**
 * LeetCode Find the Index of the First Occurrance in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 53ms    - Beats 70.17%
 * Memory:  42.12MB - Beats 95.63%
 */

import captureTestResults, { type ITest } from "../testControl";

const strStr = (haystack: string, needle: string): number => {
  if (haystack === '' || needle === '') return 0;

  return haystack.indexOf(needle);
};

const tests: ITest[] = [
  { input: ['sadbutsad', 'sad'], expected: 0, func: strStr },
  { input: ['leetcode', 'leeto'], expected: -1, func: strStr },
];

console.table(captureTestResults(tests));
