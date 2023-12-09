/**
 * Apply Transform Over Each Element in Array
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 59ms - Beats 31.23%
 * Memory:  43.54 MB - Beats 9.48%
 */

import { captureTestResults, type ITest } from '../testControl';

const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  const output: number[] = [];

  for (let i = 0; i < arr.length; ++i) {
    output.push(fn(arr[i], i));
  }

  return output;
};

const tests: ITest[] = [
  { input: [[1,2,3], (n: number) => n + 1], expected: [2,3,4], func: map },
  { input: [[1,2,3], (n: number, i: number) => n + i], expected: [1,3,5], func: map },
  { input: [[10,20,30], () => 42], expected: [42,42,42], func: map },
];

console.table(captureTestResults(tests));