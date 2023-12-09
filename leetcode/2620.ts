/**
 * LeetCode Counter
 * https://leetcode.com/problems/counter/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 45ms - Beats 93.71%
 * Memory:  42.42 MB - Beats 84.52%
 */

import { captureTestResults, type ITest } from '../testControl';

const createCounter = (n: number): () => number => {
  let counter = n;

  return (): number => counter++;
};

const testFunc = (input: number, calls: number): number[] => {
  const outputs: number[] = [];
  const counter = createCounter(input);

  for (let i = calls; i !== 0; --i) {
    outputs.push(counter());
  }

  return outputs;
};

const tests: ITest[] = [
  { input: [10, 3], expected: [10, 11, 12], func: testFunc },
  { input: [-2, 5], expected: [-2, -1, 0, 1, 2], func: testFunc },
]

console.table(captureTestResults(tests));
