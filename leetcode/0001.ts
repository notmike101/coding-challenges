/**
 * LeetCode Two Sum
 * https://leetcode.com/problems/two-sum/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 83ms    - Beats 41.72%
 * Memory:  42.35MB - Beats 99.98%
 */

import captureTestResults, { type ITest } from "../testControl";

const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

const tests: ITest[] = [
  { input: [[2, 7, 11, 15], 9], expected: [0, 1], func: twoSum },
  { input: [[3, 2, 4], 6], expected: [1, 2], func: twoSum },
  { input: [[3, 3], 6], expected: [1, 0], func: twoSum },
  { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4], func: twoSum },
  { input: [[0, 4, 3, 0], 0], expected: [0, 3], func: twoSum },
];

console.table(captureTestResults(tests));
