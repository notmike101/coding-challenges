/**
 * LeetCode Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 59ms    - Beats 27.51%
 * Memory:  42.94MB - Beats 33.16%
 */

import captureTestResults, { type ITest } from "../testControl"

const climbStairs = (n: number): number => {
  if (n === 1) return 1;

  const sqrt5 = Math.sqrt(5);
  const nPlus1 = n + 1;
  
  return Math.round((Math.pow(1 + sqrt5, nPlus1) - Math.pow(1 - sqrt5, nPlus1)) / (Math.pow(2, nPlus1) * sqrt5));
};

const tests: ITest[] = [
  { input: 1, expected: 1, func: climbStairs },
  { input: 2, expected: 2, func: climbStairs },
  { input: 3, expected: 3, func: climbStairs },
  { input: 4, expected: 5, func: climbStairs },
  { input: 5, expected: 8, func: climbStairs },
];

console.table(captureTestResults(tests));