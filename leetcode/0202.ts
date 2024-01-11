/**
 * Happy Number
 * https://leetcode.com/problems/happy-number/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 65ms - Beats 45.47%
 * Memory:  44.81 - Beats 63.88%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const isHappy = (n: number): boolean => {
  if (n <= 0) return true;

  const store = new Map<string, number>();
  let nString = n.toString();
  let sum = 0;

  while (sum !== 1) {
    sum = 0;

    for (const char of nString) {
      const num = Number(char);

      sum += num**2;
    }

    if (store.get(nString)) return false;

    store.set(nString, sum);

    nString = sum.toString();
  }

  return true;
};

const tests: ITest[] = [
  { input: [19], expected: true, func: isHappy },
  { input: [2], expected: false, func: isHappy },
  { input: [4], expected: true, func: isHappy },
  { input: [0], expected: true, func: isHappy },
  { input: [1], expected: true, func: isHappy },
  { input: [7], expected: true, func: isHappy },
  { input: [10], expected: true, func: isHappy },
  { input: [13], expected: true, func: isHappy },
  { input: [899], expected: true, func: isHappy },
  { input: [1000], expected: true, func: isHappy },
  { input: [964], expected: true, func: isHappy },
  { input: [965], expected: false, func: isHappy },
];

console.table(captureTestResults(tests));
