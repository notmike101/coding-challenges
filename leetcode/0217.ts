/**
 * LeetCode Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 67ms - Beats 97.34%
 * Memory:  55.15MB - Beats 46.86%
 */

import captureTestResults, { type ITest } from '../testControl';

const containsDuplicate = (nums: number[]): boolean => new Set(nums).size !== nums.length;

const tests: ITest[] = [
  { input: [[1,2,3,1]], expected: true, func: containsDuplicate },
  { input: [[1,2,3,4]], expected: false, func: containsDuplicate },
  { input: [[1,1,1,3,3,4,3,2,4,2]], expected: true, func: containsDuplicate },
  { input: [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]], expected: true, func: containsDuplicate },
]

console.table(captureTestResults(tests));