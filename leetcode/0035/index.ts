/**
 * LeetCode Search Insert Position
 * https://leetcode.com/problems/search-insert-position/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 45ms (Beats 95.71%)
 * Memory:  43.62MB (Beats 94.05%)
 */

import captureTestResults, { type ITest } from "../../testControl";

const searchInsert = (nums: number[], target: number): number => {
  const foundIndex = nums.indexOf(target);

  if (foundIndex !== -1) return foundIndex;

  const size = nums.length;

  for (let index = 0; index < size; ++index) {
    if (nums[index] >= target) return index;
  }

  return nums.length;
};

const tests: ITest[] = [
  { input: [[1, 3, 5, 6], 5], expected: 2, func: searchInsert },
  { input: [[1, 3, 5, 6], 2], expected: 1, func: searchInsert },
  { input: [[1, 3, 5, 6], 7], expected: 4, func: searchInsert },
  { input: [[1, 3, 5, 6], 0], expected: 0, func: searchInsert },
];

console.table(captureTestResults(tests));
