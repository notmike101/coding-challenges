/**
 * LeetCode Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 62ms    - Beats 80.16%
 * Memory:  45.69MB - Beats 33.13%
 */

import captureTestResults, { type ITest } from "../testControl";

const removeDuplicates = (nums: number[]): number => {
  const newNums = [...new Set(nums)].sort((numA, numB) => {
    if (numA < numB) return -1;
    if (numA === numB) return 0;
    return 1;
  });

  const finalIndex = newNums.length;
  let newNumIndex = 0

  while (newNumIndex < finalIndex) {
    nums[newNumIndex] = newNums[newNumIndex];
    ++newNumIndex;
  }

  return newNums.length;
};

// Implemented like this because it's a weird test...
const leetTestFunc = (input: number[]): number[] => {
  const len = removeDuplicates(input);
  const output: number[] = [];

  for (let i = 0; i < len; ++i) {
    output.push(input[i]);
  }

  return output;
};

const tests: ITest[] = [
  { input: [[1, 1, 2]], expected: [1, 2], func: leetTestFunc },
  { input: [[0,0,1,1,1,2,2,3,3,4]], expected: [0, 1, 2, 3, 4], func: leetTestFunc },
];

console.table(captureTestResults(tests));
