/**
 * Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 59ms - Beats 52.83%
 * Memory:  43.53 MB - Beats 90.31%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const searchRange = (nums: number[], target: number): number[] => {
  if (nums.length === 0) return [-1, -1];

  const output = [-1, -1];
  let leftIndex = 0, rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    if (output[0] !== -1 && output[1] !== -1) break;

    if (output[0] === -1) {
      if (nums[leftIndex] === target) {
        output[0] = leftIndex;
      } else {
        ++leftIndex;
      }
    }

    if (output[1] === -1) {
      if (nums[rightIndex] === target) {
        output[1] = rightIndex;
      } else {
        --rightIndex;
      }
    }
  }

  return output;
};

const tests: ITest[] = [
  { input: [[5,7,7,8,8,10], 8], expected: [3,4], func: searchRange },
  { input: [[5,7,7,8,8,10], 6], expected: [-1,-1], func: searchRange },
  { input: [[], 0], expected: [-1,-1], func: searchRange },
  { input: [[7,8,8,8], 8], expected: [1,3], func: searchRange },
  { input: [[1,3,2,1,2,3,21,2,31,231,1,1,2], 2], expected: [2, 12], func: searchRange },
]

console.table(captureTestResults(tests));
