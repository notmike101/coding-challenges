/**
 * LeetCode Array Prototype Last
 * https://leetcode.com/problems/array-prototype-last/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 51ms - Beats 72.03%
 * Memory:  42.80 MB - Beats 50.00%
 */

// import { captureTestResults, type ITest } from '../testControl';

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};

export {};

// Tests don't work on this because of reasons...
// 
// const tests: ITest[] = [
//   { input: [[null, {}, 3]], expected: 3, func: Array.prototype.last },
//   { input: [[]], expected: -1, func: Array.prototype.last },
// ];

// console.log(captureTestResults(tests));
