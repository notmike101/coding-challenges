/**
 * LeetCode Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 103ms    - Beats 81.05%
 * Memory:  49.23 MB - Beats 47.52%
 */

import captureTestResults, { type ITest } from "../testControl";

const romanMap: [string, number][] = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

const intToRoman = (num: number): string => {
  let output = '';
  let remaining = num;

  for (const [key, value] of romanMap) {
    const numberToAdd = Math.floor(remaining / value);

    if (numberToAdd === 0) continue;

    output += (key.repeat(numberToAdd));
    remaining -= value * numberToAdd;

    if (remaining === 0) break;
  }

  return output;
};

const tests: ITest[] = [
  { input: 1, expected: 'I', func: intToRoman },
  { input: 3, expected: 'III', func: intToRoman },
  { input: 58, expected: 'LVIII', func: intToRoman },
  { input: 99, expected: 'XCIX', func: intToRoman },
  { input: 1000, expected: 'M', func: intToRoman },
  { input: 3999, expected: 'MMMCMXCIX', func: intToRoman },
]

console.table(captureTestResults(tests));