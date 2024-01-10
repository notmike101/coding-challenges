/**
 * Compact Object
 * https://leetcode.com/problems/compact-object/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 80ms - Beats 85.71%
 * Memory:  52.03 MB - Beats 94.29%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const compactObject = (obj: Obj): Obj => {
  if (typeof obj !== 'object') return obj;

  let temp: any[] | Record<string, any>;
  let maxIVal: number;
  let objectKeys: string[];
  let i = 0;

  if (Array.isArray(obj)) {
    temp = [];
    maxIVal = obj.length - 1;

    for (i = 0; i <= maxIVal; ++i) {
      if (Boolean(obj[i])) {
        temp.push(compactObject(obj[i] as Obj))
      }
    }

    return temp;
  } else {
    temp = {};
    objectKeys = Object.keys(obj);
    maxIVal = objectKeys.length - 1;

    for (i = 0; i <= maxIVal; ++i) {
      if (Boolean(obj[objectKeys[i]])) {
        temp[objectKeys[i]] = compactObject(obj[objectKeys[i]] as Obj);
      }
    }

    return temp;
  }
};

const tests: ITest[] = [
  { input: [[null, 0, false, 1]], expected: [1], func: compactObject },
  { input: [{ a: null, b: [false, 1] }], expected: { b: [1] }, func: compactObject },
  { input: [[null, 0, 5, [0], [false, 16]]], expected: [5, [], [16]], func: compactObject },
];

console.table(captureTestResults(tests));
