/**
 * LeetCode 231. Power of Two
 * https://leetcode.com/problems/power-of-two/submissions/1180022290/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 89ms - Beats 14.12%
 * Memory:  53.66 MB - Beats 37.94%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const isPowerOfTwo = (n: number): boolean => n > 0 && (n & (n - 1)) === 0;

const tests: ITest[] = [
  { input: 1, expected: true, func: isPowerOfTwo },
  { input: 16, expected: true, func: isPowerOfTwo },
  { input: 3, expected: false, func: isPowerOfTwo },
  { input: -2147483648, expected: false, func: isPowerOfTwo },
];

console.table(captureTestResults(tests));