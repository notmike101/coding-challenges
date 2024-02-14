/**
 * LeetCode Find First Palindromic String In The Array
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/submissions/1173957295/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 314ms - Beats 43.24% - Top solutions have same implementation, runtime isn't correct
 * Memory:  96.19 MB - Beats 56.76%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const rearrangeArray = (nums: number[]): number[] => {
  let i = 0,
      positiveIndex = 0,
      negativeIndex = 1;
  const numsLength = nums.length,
        output = new Array(numsLength);

  for (; i < numsLength; ++i) {
      if (nums[i] < 0) {
          output[negativeIndex] = nums[i];
          negativeIndex += 2;
      } else {
          output[positiveIndex] = nums[i];
          positiveIndex += 2;
      }
  }

  return output;
};

const tests: ITest[] = [
  { input: [[3,1,-2,-5,2,-4]], expected: [3,-2,1,-5,2,-4], func: rearrangeArray },
  { input: [[-1,1]], expected: [1, -1], func: rearrangeArray },
];

console.table(captureTestResults(tests));
