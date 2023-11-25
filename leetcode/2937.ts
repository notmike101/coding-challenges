/**
 * LeetCode Make Three Strings Equal
 * https://leetcode.com/problems/make-three-strings-equal/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 70ms     - Beats 100.00%
 * Memory:  47.01 MB - Beats 79.55%
 */

import captureTestResults, { type ITest } from "../testControl"

const findMinimumOperations = (s1: string, s2: string, s3: string): number => {
  if (s1[0] !== s2[0] || s2[0] !== s3[0]) return -1;

  const shortestStringLength = Math.min(s1.length, s2.length, s3.length);
  let sumOfStringLengths = s1.length + s2.length + s3.length - 3;
  let index = 1;

  while (index < shortestStringLength) {
    const s1Char = s1[index];
    const s2Char = s2[index];
    const s3Char = s3[index++];

    if (s1Char !== s2Char || s2Char !== s3Char) break;
    
    sumOfStringLengths -= 3;
  }

  return sumOfStringLengths;
};

const tests: ITest[] = [
  { input: ['abc', 'abb', 'ab'], expected: 2, func: findMinimumOperations },
  { input: ['dac', 'bac', 'cac'], expected: -1, func: findMinimumOperations },
  { input: ['a', 'a', 'a'], expected: 0, func: findMinimumOperations },
];


console.table(captureTestResults(tests));
