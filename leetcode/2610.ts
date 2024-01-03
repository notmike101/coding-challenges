/**
 * Convert an Array Into a 2D Array With Conditions
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 78ms - Beats 90.24%
 * Memory:  47.47 MB - Beats 70.73%
 */

import { captureTestResults, type ITest } from "../testControl";

const findMatrix = (nums: number[]): number[][] => {
  const output: number[][] = [[]];
  let targetRow = 0;
  let numsIndex = nums.length - 1;
  let num: number;

  while (numsIndex >= 0) {
    num = nums[numsIndex--];

    while(output[targetRow].indexOf(num) !== -1) {
      if (!output[++targetRow]) output.push([]);
    }

    output[targetRow].push(num);

    targetRow = 0;
  }

  return output;
};

const tests: ITest[] = [
  { input: [[1,3,4,1,2,3,1]], expected: [[1,3,4,2],[1,3],[1]], func: findMatrix },
  { input: [[1,2,3,4]], expected: [[4,3,2,1]], func: findMatrix },
];

console.table(captureTestResults(tests));
