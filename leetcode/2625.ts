/**
 * Flatten Deeply Nested Array
 * https://leetcode.com/problems/flatten-deeply-nested-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 156ms - Beats 30.78%
 * Memory:  118.63 - Beats 10.98%
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr:  MultiDimensionalArray, n: number): MultiDimensionalArray => {
  if (n <= 0) return arr;

  let bailAllNumbers = true;

  for (let i = arr.length - 1; i >= 0; --i) {
    if (typeof arr[i] !== 'number') {
      bailAllNumbers = false;
      break;
    }
  }

  if (bailAllNumbers) return arr;

  const output: MultiDimensionalArray = [];

  for (const entry of arr) {
    if (Array.isArray(entry)) {
      output.push(...entry);
    } else {
      output.push(entry);
    }
  }

  return flat(output, n - 1);
};

const test = () => {
  const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
  const depth = 1;

  const output = flat(input, depth);

  console.log(output);
}

test();
