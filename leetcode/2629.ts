/**
 * Function Composition
 * https://leetcode.com/problems/function-composition/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 62ms - Beats 83.82%
 * Memory:  45.16 MB - Beats 89.02%
 */

import { captureTestResults, type ITest } from '../testControl';

type F = (x: number) => number;

const compose = (functions: F[]): F => {
  return (x) => {
    let intermValue = x;

    for (let i = functions.length - 1; i >= 0; --i) {
      intermValue = functions[i](intermValue);
    }

    return intermValue;
  };
};

const testComposition = (funcs: F[], initial: number) => {
  const composedFunction = compose(funcs);

  return composedFunction(initial);
};

const tests: ITest[] = [
  {
    input: [
      [
        (x: number) => x + 1,
        (x: number) => x * x,
        (x: number) => 2 * x
      ],
      4,
    ],
    expected: 65,
    func: testComposition,
  },
  {
    input: [
      [
        (x: number) => 10 * x,
        (x: number) => 10 * x,
        (x: number) => 10 * x,
      ],
      1,
    ],
    expected: 1000,
    func: testComposition,
  },
  {
    input: [
      [
        (x: number) => 10 * x,
      ],
      1,
    ],
    expected: 10,
    func: testComposition,
  },
]

console.table(captureTestResults(tests));
