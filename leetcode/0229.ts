/**
 * Majority Element II
 * https://leetcode.com/problems/majority-element-ii/description/
 * 
 * Runtime: 70ms - Beats 35.59%
 * Memory:  52.57 MB - Beats 10.17%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const majorityElement = (nums: number[]): number[] => {
  const counter = new Map<number, number>();
  const targetCount = nums.length / 3;
  const output = new Set<number>();

  for (let i = nums.length - 1, num = nums[i]; i >= 0; num = nums[--i]) {
    counter.set(num, (counter.get(num) ?? 0) + 1);

    if (counter.get(num)! > targetCount) {
      output.add(num)
    }
  }

  return Array.from(output);
};

const tests: ITest[] = [
  { input: [[3,2,3]], expected: [3], func: majorityElement },
  { input: [[1]], expected: [1], func: majorityElement },
  { input: [[1,2]], expected: [1,2], func: majorityElement },
];

console.table(captureTestResults(tests));
