/**
 * Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 104ms - Beats 34.58%
 * Memory:  49.13MB - Beats 25.71%
 * 
 * Notes: Too tired to implement properly, revisit at a later date
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const sortCallback = (a: number, b: number) => a - b;

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  if (nums1.length === 1 && nums2.length === 0) return nums1[0];
  if (nums1.length === 0 && nums2.length === 1) return nums2[0];
  if (nums1.length == 1 && nums2.length === 1) return (nums1[0] + nums2[0]) / 2;

  const mergedArrays = nums1.concat(nums2).sort(sortCallback);

  if (mergedArrays.length % 2 === 1) {
    return mergedArrays[(mergedArrays.length - 1) / 2];
  }

  const leftIndex = Math.floor((mergedArrays.length - 1) / 2);
  const rightIndex = leftIndex + 1;

  return (mergedArrays[leftIndex] + mergedArrays[rightIndex]) / 2;
};

const tests: ITest[] = [
  { input: [[1,3],[2]], expected: 2, func: findMedianSortedArrays },
  { input: [[1,2],[3,4]], expected: 2.5, func: findMedianSortedArrays },
  { input: [[100000],[100001]], expected: 100000.5, func: findMedianSortedArrays },
];

console.table(captureTestResults(tests));
