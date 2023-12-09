/**
 * Return Length of Arguments Passed
 * https://leetcode.com/problems/return-length-of-arguments-passed/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 69ms - Beats 5.77% (Lolwat)
 * Memory:  44.17 MB - Beats 5.49% (Lolwat)
 */

import { captureTestResults, type ITest } from '../testControl';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;

const tests: ITest[] = [
  { input: [5], expected: 1, func: argumentsLength },
  { input: [{}, null, 3], expected: 3, func: argumentsLength },
];

console.table(captureTestResults(tests));