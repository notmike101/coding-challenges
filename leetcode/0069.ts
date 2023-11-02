/**
 * LeetCode Sqrt(x)
 * https://leetcode.com/problems/sqrtx/submissions/1089650611/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 87mb    - Beats 25.08%
 * Memory:  44.81MB - Beats 42.45%
 */

import captureTestResults, { type ITest } from "../testControl"

const mySqrt = (x: number): number => {
  let num = 0;
  let result = 0;

  while (result <= x) {
    num += 1;
    result = num * num;
  }

  return num - 1;
};

const tests: ITest[] = [
  { input: 4, expected: 2, func: mySqrt },
  { input: 8, expected: 2, func: mySqrt },
];

console.table(captureTestResults(tests));
