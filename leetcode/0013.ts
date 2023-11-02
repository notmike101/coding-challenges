/**
 * LeetCode Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 113ms   - Beats 58.35%
 * Memory:  47.60MB - Beats 83.70%
 */

import captureTestResults, { type ITest } from "../testControl";

type RSymbol = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

const rSymbolMap: Record<RSymbol, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  const sLength = s.length;
  let sum = 0;
  let charIndex = 0;

  while (charIndex < sLength) {
    const currentChar = rSymbolMap[s[charIndex] as RSymbol];
    const nextChar = rSymbolMap[s[charIndex + 1] as RSymbol];

    if (currentChar < nextChar) {
      sum -= currentChar;
    } else {
      sum += currentChar;
    }

    ++charIndex;
  }

  return sum;
}

const tests: ITest[] = [
  { input: 'III', expected: 3, func: romanToInt },
  { input: 'LVIII', expected: 58, func: romanToInt },
  { input: 'MCMXCIV', expected: 1994, func: romanToInt },
];

console.table(captureTestResults(tests));
