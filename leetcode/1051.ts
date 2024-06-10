/**
 * Height Checker
 * https://leetcode.com/problems/height-checker/submissions/1283339690/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 52ms - Beats 80.05%
 * Memory:  51.02 MB - Beats 94.97%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const heightChecker = (heights: number[]): number => {
  if (heights.length <= 1) return 0;

  const expected = [...heights].sort((a, b) => a - b);
  let i = heights.length - 1,
      unexpectedCount = 0;

  while (i >= 0) {
    unexpectedCount += Number(heights[i] !== expected[i]);
    --i;
  }

  return unexpectedCount;
};

const tests: ITest[] = [
  { input: [[1,1,4,2,1,3]], expected: 3, func: heightChecker },
  { input: [[5,1,2,3,4]], expected: 5, func: heightChecker },
  { input: [[1,2,3,4,5]], expected: 0, func: heightChecker },
  { input: [[10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]], expected: 22, func: heightChecker },
];

console.table(captureTestResults(tests));
