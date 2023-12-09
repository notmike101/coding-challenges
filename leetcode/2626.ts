/**
 * Array Reduce Transform
 * https://leetcode.com/problems/array-reduce-transformation/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 52ms - Beats 84.79%
 * Memory:  44.63 MB - Beats 49.42%
 */

import { captureTestResults, type ITest } from '../testControl';

type Fn = (accum: number, curr: number) => number;

const reduce = (nums: number[], fn: Fn, init: number): number => {
  let accumulator = init;

  for (const num of nums) {
    accumulator = fn(accumulator, num);
  }

  return accumulator;
};

const tests: ITest[] = [
  { input: [[1,2,3,4], (accum: number, curr: number) => accum + curr, 0], expected: 10, func: reduce },
  { input: [[1,2,3,4], (accum: number, curr: number) => accum + curr * curr, 100], expected: 130, func: reduce },
  { input: [[], (accum: number, curr: number) => 0, 25], expected: 25, func: reduce },
];

console.table(captureTestResults(tests));
