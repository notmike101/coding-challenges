/**
 * Join Two Arrays by ID
 * https://leetcode.com/problems/join-two-arrays-by-id/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 318ms - Beats 41.46%
 * Memory:  112.35 MB - Beats 37.13%
 * 
 * Notes: Tests not functional, not set up to handle deeply nested objects or arrays
 */

import { captureTestResults, type ITest } from '../testControl.ts';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

const sortCallbaack = (a: ArrayType, b: ArrayType) => a.id - b.id;

const join = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const output = new Map<number, ArrayType>();
  let arr1Index = arr1.length - 1;
  let arr2Index = arr2.length - 1;
  let existingItem: ArrayType | undefined;

  do {
    output.set(arr1[arr1Index].id, arr1[arr1Index]);
  } while (--arr1Index >= 0);

  do {
    existingItem = output.get(arr2[arr2Index].id);

    if (!existingItem) {
      output.set(arr2[arr2Index].id, arr2[arr2Index]);
    } else {
      output.set(arr2[arr2Index].id, {
        ...existingItem,
        ...arr2[arr2Index],
      });
    }

  } while (--arr2Index >= 0);

  return Array.from(output.values()).sort(sortCallbaack) as ArrayType[];
};

const tests: ITest[] = [
  // {
  //   input: [
  //     [
  //       { id: 1, x: 1 },
  //       { id: 2, x: 9 },
  //     ],
  //     [
  //       { id: 3, x: 5 },
  //     ],
  //   ],
  //   expected: [
  //     { id: 1, x: 1 },
  //     { id: 2, x: 9 },
  //     { id: 3, x: 5 },
  //   ],
  //   func: join,
  // },
  // {
  //   input: [
  //     [
  //       { id: 1, x: 2, y: 3 },
  //       { id: 2, x: 3, y: 6 },
  //     ],
  //     [
  //       { id: 2, x: 10, y: 20 },
  //       { id: 3, x: 0, y: 0 },
  //     ],
  //   ],
  //   expected: [
  //     { id: 1, x: 2, y: 3 },
  //     { id: 2, x: 10, y: 20 },
  //     { id: 3, x: 0, y: 0 },
  //   ],
  //   func: join,
  // },
  // {
  //   input: [
  //     [
  //       { id: 1, b: { b: 94 }, v: [4, 3], y: 48 },
  //     ],
  //     [
  //       { id: 1, b: { c: 84 }, v: [1, 3], y: 48 },
  //     ],
  //   ],
  //   expected: [
  //     { id: 1, b: { c: 84 }, v: [1, 3], y: 48 },
  //   ],
  //   func: join,
  // },
];

console.table(captureTestResults(tests));