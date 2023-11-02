/**
 * LeetCode Add Binary
 * https://leetcode.com/problems/add-binary/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 63ms (Beats 48.19%)
 * Memory:  44.75MB (Beats 75.67%)
 */

import captureTestResults, { type ITest } from "../../testControl"

const addBinary = (a: string, b: string): string => {
  if (a === '0') return b;
  if (b === '0') return a;

  const maxLen = Math.max(a.length, b.length);
  const aPadded = a.padStart(maxLen, '0');
  const bPadded = b.padStart(maxLen, '0');
  let carry = 0;
  let final = '';
  let index = maxLen - 1;

  while (index >= 0) {
    const aDigit = parseInt(aPadded[index]);
    const bDigit = parseInt(bPadded[index]);
    let resultDigit = aDigit + bDigit + carry;

    carry = resultDigit > 1 ? 1 : 0;
    final = (resultDigit % 2) + final;

    --index;
  }

  if (carry) {
    final = '1' + final;
  }

  return final;
};

const tests: ITest[] = [
  { input: ['11', '1'], expected: '100', func: addBinary },
  { input: ['1010', '1011'], expected: '10101', func: addBinary },
  { input: ['110110001010', '10100101001010'], expected: '11011011010100', func: addBinary },
];

console.table(captureTestResults(tests));
