/**
 * Check if Object Instance of Class
 * https://leetcode.com/problems/check-if-object-instance-of-class/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 92ms - Beats 83.19%
 * Memory:  61.48 MB - Beats 6.19%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const checkIfInstanceOf = (obj: any, classFunction: any): boolean => {
  if (!obj?.__proto__ || !classFunction?.prototype) return false;

  let targetPrototype = Object.getPrototypeOf(obj);

  do {
    if (targetPrototype === classFunction.prototype) {
      return true;
    }

    targetPrototype = Object.getPrototypeOf(targetPrototype);
  } while (targetPrototype);

  return false;
};

class Animal {};
class Dog extends Animal {};

const tests: ITest[] = [
  { input: [new Date(), Date], expected: true, func: checkIfInstanceOf },
  { input: [Date, Date], expected: false, func: checkIfInstanceOf },
  { input: [new Dog(), Animal], expected: true, func: checkIfInstanceOf },
  { input: [5, Number], expected: true, func: checkIfInstanceOf },
  { input: [12, Object], expected: true, func: checkIfInstanceOf },
  { input: [5n, Object], expected: true, func: checkIfInstanceOf },
  { input: [5n, BigInt], expected: true, func: checkIfInstanceOf },
  { input: [null, null], expected: false, func: checkIfInstanceOf },
  { input: [[], null], expected: false, func: checkIfInstanceOf },
];

console.table(captureTestResults(tests));
