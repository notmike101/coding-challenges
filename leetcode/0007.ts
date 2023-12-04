/**
 * LeetCode Reverse Integer
 * https://leetcode.com/problems/reverse-integer/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 65ms     - Beats 60.81%
 * Memory:  44.40 MB - Beats 90.99%
 */

import { captureTestResults, type ITest } from "../testControl";

const reverse = (x: number): number => {
  if (x === 0) return 0;
  if (x < 10 && x > 0) return x;

  const isNegative = x < 0;
  const xString = x.toString();
  const xReversed = Math.abs(parseInt([...(isNegative ? xString.substring(1) : xString)].reverse().join('')));

  if (xReversed > 2147483647) return 0;

  return isNegative ? -xReversed : xReversed;
};

const tests: ITest[] = [
  { input: 123, expected: 321, func: reverse },
  { input: -123, expected: -321, func: reverse },
  { input: 120, expected: 21, func: reverse },
];

console.table(captureTestResults(tests));
