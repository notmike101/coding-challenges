/**
 * LeetCode Majority Element
 * https://leetcode.com/problems/majority-element/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms - Beats 80.49%
 * Memory:  46.62 MB - Beats 19.63%
 */

import captureTestResults, { type ITest } from '../testControl';

const majorityElement = (nums: number[]): number => {
  const occurances: {[key: number]: number} = {};
  const targetSize = nums.length / 2;

  for (const num of nums) {
    if (occurances[num] === undefined) {
      occurances[num] = 0;
    }

    occurances[num]++;

    if (occurances[num] > targetSize) {
      return num;
    }
  }

  return 0;
};

const tests: ITest[] = [
  { input: [[3,2,3]], expected: 3, func: majorityElement },
  { input: [[2,2,1,1,1,2,2]], expected: 2, func: majorityElement },
];

console.table(captureTestResults(tests));