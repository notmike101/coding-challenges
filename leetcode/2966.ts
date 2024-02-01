/**
 * 2966. Divide Array Into Arrays With Max Difference
 * https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/
 * 
 * Runtime: 384ms - Beats 11.43%
 * Memory:  80.92 MB - Beats 100%
 * 
 * Note: Runtime isn't accurate, top solutions implement similiar or same functionality
 */

import captureTestResults, { ITest } from '../testControl.ts';

const numsSortCallback = (a: number, b: number) => a - b;

const divideArray = (nums: number[], k: number): number[][] => {
  const output: number[][] = [],
        numsLength = nums.length;

  nums.sort(numsSortCallback);

  for (let i = 0; i < numsLength; i += 3) {
    if (i + 2 < numsLength && nums[i + 2] - nums[i] <= k) {
      output.push([nums[i], nums[i + 1], nums[i + 2]]);
    } else {
      return [];
    }
  }

  return output;
};

const tests: ITest[] = [
  { input: [[1,3,4,8,7,9,3,5,1], 2], expected: [[1,1,3],[3,4,5],[7,8,9]], func: divideArray },
  { input: [[1,3,3,2,7,3], 3], expected: [], func: divideArray },
];

console.table(captureTestResults(tests));
