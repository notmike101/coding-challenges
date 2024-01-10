/**
 * String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 80ms - Beats 21.37%
 * Memory:  46.12 - Beats 24.06%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const myAtoi = (s: string): number => {
  let output: string | number = '';
  let trimmed = s.trim();
  const negativeMultiplier = trimmed[0] === '-' ? -1 : 1;
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = (Math.pow(2, 31)) * -1;

  if (trimmed[0] === '+' || trimmed[0] === '-') trimmed = trimmed.slice(1);

  for (let i = 0; i < trimmed.length; ++i) {
    const num = parseInt(trimmed[i]);

    if (Number.isNaN(num)) break;

    output += trimmed[i];
  }

  if (output === '') return 0;

  return Math.max(minInt, Math.min(maxInt, parseInt(output) * negativeMultiplier));
};

const tests: ITest[] = [
  { input: '42', expected: 42, func: myAtoi },
  { input: '   -42', expected: -42, func: myAtoi },
  { input: '4193 with words', expected: 4193, func: myAtoi },
  { input: 'words are 4193', expected: 0, func: myAtoi },
  { input: '+1', expected: 1, func: myAtoi },
  { input: '21474836460', expected: 2147483647, func: myAtoi },
  { input: '-91283472332', expected: -2147483648, func: myAtoi },
];

console.table(captureTestResults(tests));
