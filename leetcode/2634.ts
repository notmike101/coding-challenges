/**
 * Filter Elements from Array
 * https://leetcode.com/problems/filter-elements-from-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms - Beats 45.00%
 * Memory:  43.57 MB - Beats 14.58%
 */

import { captureTestResults, type ITest } from '../testControl';

type Fn = (n: number, i: number) => any

const filter = (arr: number[], fn: Fn): number[] => {
  const output: number[] = [];

  for (let i = 0; i < arr.length; ++i) {
    const elm = arr[i];

    if (fn(elm, i)) {
      output.push(elm);
    }
  }

  return output;
};

const tests: ITest[] = [
  { input: [[0, 10, 20, 30], (n: number) => n > 10], expected: [20, 30], func: filter },
  { input: [[1,2,3], (n: number, i: number) => i === 0], expected: [1], func: filter },
  { input: [[-2,-1,0,1,2], (n: number) => n + 1], expected: [-2, 0, 1, 2], func: filter },
];

console.table(captureTestResults(tests));