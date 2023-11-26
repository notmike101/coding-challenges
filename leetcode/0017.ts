/**
 * LeetCode Letter Combinations of a Phone Number
 * hhttps://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms     - Beats 41.64%
 * Memory:  44.65 MB - Beats 8.98%
 */

import captureTestResults, { type ITest } from "../testControl"

const letterMap = [
  [],
  [],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

const letterCombinations = (digits: string): string[] => {
  if (digits.length === 0) return [];
  if (digits.length === 1) return letterMap[parseInt(digits[0])];

  const convertedDigits = digits.split('').map((digit) => letterMap[parseInt(digit)]);

  const cartesian = (input: string[][]) => {
    const output: string[] = [];
    const max = input.length - 1;

    const _cartesian = (arr: string[], i = 0) => {
      for (let j = 0, l = input[i].length; j < l; ++j) {
        const a = arr.slice(0);

        a.push(input[i][j]);

        if (i === max) {
          output.push(a.join(''));
        } else {
          _cartesian(a, i + 1);
        }
      };
    };

    _cartesian([]);

    return output;
  };

  return cartesian(convertedDigits);
};

const letterCombinationTest = (result: string[], expected: string[]): boolean => {
  for (const expectedEntry of expected) {
    if (!result.includes(expectedEntry)) return false;
  }

  return true;
};

const tests: ITest[] = [
  { input: '23', expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'], func: letterCombinations, testFunc: letterCombinationTest },
  { input: '', expected: [], func: letterCombinations, testFunc: letterCombinationTest },
  { input: '2', expected: ['a', 'b', 'c'], func: letterCombinations, testFunc: letterCombinationTest },
];

console.table(captureTestResults(tests));