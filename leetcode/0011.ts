/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 74ms - Beats 41.86%
 * Memory:  51.26 MB - Beats 66.86%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const maxArea = (height: number[]): number => {
  let maxArea = 0,
      leftIndex = 0,
      rightIndex = height.length - 1,
      leftHeight,
      rightHeight,
      sectionWidth,
      sectionMaxFill;

  while (leftIndex <= rightIndex) {
    leftHeight = height[leftIndex];
    rightHeight = height[rightIndex];
    sectionWidth = rightIndex - leftIndex;
    sectionMaxFill = Math.min(leftHeight, rightHeight);
    maxArea = Math.max(sectionWidth * sectionMaxFill, maxArea);

    if (leftHeight < rightHeight) ++leftIndex;
    else --rightIndex;
  }

  return maxArea;
};

const tests: ITest[] = [
  { input: [[1,8,6,2,5,4,8,3,7]], expected: 49, func: maxArea },
  { input: [[1,1,]], expected: 1, func: maxArea },
  { input: [[1,2,1]], expected: 2, func: maxArea },
  { input: [[2,1]], expected: 1, func: maxArea },
];

console.table(captureTestResults(tests));
