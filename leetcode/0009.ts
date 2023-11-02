/**
 * LeetCode Palindrome Number
 * https://leetcode.com/problems/palindrome-number/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 135ms   - Beats 78.64%
 * Memory:  52.57MB - Beats 8.59%
 */

import captureTestResults, { type ITest } from "../testControl";

const isPalindrome = (x: number): boolean => {
  const numberString = x.toString();
  const numberStringHalfLength = numberString.length / 2;
  let indexLeft = 0;
  let indexRight = numberString.length - 1;

  while (indexLeft < numberStringHalfLength) {
    if (numberString[indexLeft++] !== numberString[indexRight--]) {
      return false;
    }
  }

  return true;
};

const tests: ITest[] = [
  { input: 1, expected: true, func: isPalindrome },
  { input: 10, expected: false, func: isPalindrome },
  { input: 11, expected: true, func: isPalindrome },
  { input: 121, expected: true, func: isPalindrome },
  { input: -121, expected: false, func: isPalindrome },
  { input: 12321, expected: true, func: isPalindrome },
  { input: 1212, expected: false, func: isPalindrome },
  { input: 9007199254740991, expected: false, func: isPalindrome },
  { input: 9007199119917009, expected: true, func: isPalindrome },
];

console.table(captureTestResults(tests));
