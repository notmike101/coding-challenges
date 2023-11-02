/**
 * LeetCode Plus One
 * https://leetcode.com/problems/plus-one/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms (Beats 46.73%)
 * Memory:  44.75MB (Beats 6.41%)
 */

import captureTestResults, { type ITest } from '../../testControl';

const plusOne = (digits: number[]): number[] => {
  const number = BigInt(digits.join('')) + BigInt(1);

  return number.toString().split('').map(Number);
};

const tests: ITest[] = [
  { input: [1, 2, 3], expected: [1, 2, 4], func: plusOne },
  { input: [4, 3, 2, 1], expected: [4, 3, 2, 2], func: plusOne },
  { input: [9], expected: [1, 0], func: plusOne },
  { input: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3], expected: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4], func: plusOne },
];

console.table(captureTestResults(tests));
