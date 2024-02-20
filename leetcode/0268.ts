/**
 * Leetcode 268 Missing Number
 * https://leetcode.com/problems/missing-number/submissions/1181140913/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 76ms - Beats 35.22%
 * Memory:  52.39 MB - Beats 28.84%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const missingNumber = (nums: number[]): number => {
  const numSortCallback = (a: number, b: number) => a - b;

  nums.sort(numSortCallback);

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== i) return i;
  }

  return nums[nums.length - 1] + 1;
};

const tests: ITest[] = [
  { input: [[3,0,1]], expected: 2, func: missingNumber },
  { input: [[0,1]], expected: 2, func: missingNumber },
  { input: [[9,6,4,2,3,5,7,0,1]], expected: 8, func: missingNumber },
  { input: [[1]], expected: 0, func: missingNumber },
  { input: [[45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]], expected: 18, func: missingNumber },
];

console.table(captureTestResults(tests, 18));
