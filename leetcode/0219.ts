/**
 * Contains Duplicate II
 * hhttps://leetcode.com/problems/contains-duplicate-ii
 * 
 * Runtime: 91ms - Beats 64.84%
 * Memory:  70.87 MB - Beats 19.62%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const numberMap = new Map<number, number>(),
        numsLength = nums.length;
  let numsIndex = 0;

  while (numsIndex !== numsLength) {
    if (numberMap.has(nums[numsIndex]) && (Math.abs(numberMap.get(nums[numsIndex])! - numsIndex) <= k)) {
      return true;
    }

    numberMap.set(nums[numsIndex], numsIndex);

    ++numsIndex;
  }

  return false;
};

const tests: ITest[] = [
  { input: [[1,2,3,1], 3], expected: true, func: containsNearbyDuplicate },
  { input: [[1,0,1,1], 1], expected: true, func: containsNearbyDuplicate },
  { input: [[1,2,3,1,2,3], 2], expected: false, func: containsNearbyDuplicate },
];

console.table(captureTestResults(tests));
