/**
 * Zigzag Conversion
 * https://leetcode.com/problems/zigzag-conversion/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 68ms - Beats 88.13%
 * Memory:  47.29 MB - Beats 67.75%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const convert = (s: string, numRows: number): string => {
  const map: string[] = [];
  let rowIndex = 0;
  let invertTraverse = false;

  for (let i = 0; i < s.length; ++i) {
    if (rowIndex < 0) rowIndex = 0;
    if (!map[rowIndex]) map[rowIndex] = '';

    map[rowIndex] += s[i];

    if (rowIndex === numRows - 1) invertTraverse = true;
    else if (rowIndex === 0) invertTraverse = false;

    rowIndex += invertTraverse ? -1 : 1;
  }

  return map.join('');
};

const tests: ITest[] = [
  { input: ['PAYPALISHIRING', 3], expected: 'PAHNAPLSIIGYIR', func: convert },
  { input: ['PAYPALISHIRING', 4], expected: 'PINALSIGYAHRPI', func: convert },
  { input: ['A', 1], expected: 'A', func: convert },
  { input: ['AB', 1], expected: 'AB', func: convert },
];

console.table(captureTestResults(tests));
