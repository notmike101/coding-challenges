/**
 * LeetCode Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 45ms     - Beats 98.34%
 * Memory:  44.80 MB - Beats 34.80%
 */

import captureTestResults, { type ITest } from "../testControl";

const bracketMap: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const isValid = (s: string): boolean => {
  if (s.length % 2 === 1) return false;
  if ([')','}',']'].includes(s[0])) return false;

  let parens: string[] = [];

  for (const char of s) {
    if (bracketMap[char]) {
      if (parens.length === 0) return false;
      if (bracketMap[char] !== parens.pop()) return false;
    } else {
      parens.push(char);
    }
  }

  return parens.length === 0;
};

const tests: ITest[] = [
  { input: '()', expected: true, func: isValid },
  { input: '()[]{}', expected: true, func: isValid },
  { input: '(]', expected: false, func: isValid },
  { input: '([)]', expected: false, func: isValid },
  { input: '((]', expected: false, func: isValid },
];

console.table(captureTestResults(tests));
