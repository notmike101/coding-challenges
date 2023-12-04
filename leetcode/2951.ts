/**
 * Find the Peaks
 * https://leetcode.com/problems/find-the-peaks/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 62ms - Beats 54.55%
 * Memory:  45.01 MB - Beats 40.91
 */

import { captureTestResults, type ITest } from "../testControl";

const findPeaks = (mountains: number[]): number[] => {
  const peaks: number[] = [];

  for (let mountainIndex = mountains.length; mountainIndex >= 0; --mountainIndex) {
    const currentMountain = mountains[mountainIndex];

    if (mountains[mountainIndex - 1] < currentMountain && mountains[mountainIndex + 1] < currentMountain) {
      peaks.push(mountainIndex);
    }
  }

  return peaks;
};

const tests: ITest[] = [
  { input: [[2,4,4]], expected: [], func: findPeaks },
  { input: [[1,4,3,8,5]], expected: [1,3], func: findPeaks },
];

console.table(captureTestResults(tests));