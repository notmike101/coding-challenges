/**
 * Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 115ms - Beats 73.62%
 * Memory:  44.90 MB - Beats 47.55%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const lengthOfLIS = (nums: number[]): number => {
  const numsLength = nums.length;
  const store = new Array(numsLength).fill(1);
  let max = 1;

  for (let i = numsLength - 2; i >= 0; --i) {
    let temp = 0;

    for (let j = i + 1; j < numsLength; ++j) {
      if (nums[i] < nums[j] && store[j] > temp) {
        temp = store[j];
      }
    }

    store[i] += temp;

    if (store[i] > max) {
      max = store[i];
    }
  }

  return max;
};

const tests: ITest[] = [
  { input: [[10,9,2,5,3,7,101,18]], expected: 4, func: lengthOfLIS },
  { input: [[0,1,0,3,2,3]], expected: 4, func: lengthOfLIS },
  { input: [[7,7,7,7,7,7,7]], expected: 1, func: lengthOfLIS },
];

console.table(captureTestResults(tests));
