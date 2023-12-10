/**
 * Is Object Empty
 * https://leetcode.com/problems/is-object-empty/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 47ms - Beats 92.09%
 * Memory:  44.75 MB - Beats 68.97%
 */

import { captureTestResults, type ITest } from '../testControl';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

const isEmpty = (obj: Obj): boolean => Object.keys(obj).length === 0;

const tests: ITest[] = [
  { input: [{ x: 5, y: 42 }], expected: false, func: isEmpty },
  { input: [{}], expected: true, func: isEmpty },
  { input: [[null, false, 0]], expected: false, func: isEmpty },
];

console.table(captureTestResults(tests));