/**
 * Chunk Array
 * https://leetcode.com/problems/chunk-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 46ms - Beats 97.59%
 * Memory:  45.65 MB - Beats 27.62%
 */

import { captureTestResults, type ITest } from '../testControl';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const chunk = (arr: Obj[], size: number): Obj[][] => {
  if (arr.length === 0) return [];
  if (arr.length <= size) return [arr];

	const output: Obj[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    output.push(arr.slice(i, i + size));
  }

  return output;
};

const tests: ITest[] = [
  { input: [[1,2,3,4,5], 1], expected: [[1], [2], [3], [4], [5]], func: chunk },
  { input: [[1,9,6,3,2], 3], expected: [[1,9,6],[3,2]], func: chunk },
  { input: [[8,5,3,2,6], 6], expected: [[8,5,3,2,6]], func: chunk },
  { input: [[], 1], expected: [], func: chunk },
];

console.table(captureTestResults(tests));