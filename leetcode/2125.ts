/**
 * Number of Laser Beams in a Bank
 * https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 143 ms - Beats 8.70% (Idk how, all tests show this should perform faster)
 * Memory:  52.43 MB - Beats 73.91%
 */

import { captureTestResults, type ITest } from "../testControl";

const numberOfBeams = (bank: string[]): number => {
  if (bank.length <= 1) return 0;

  let beams = 0;
  let rowDeviceCount = 0;
  let previousRowDeviceCount = 0;

  for (let rowIndex = bank.length - 1; rowIndex >= 0; rowIndex--) {
    const deviceSlots = bank[rowIndex];

    for (let slotIndex = deviceSlots.length - 1; slotIndex >= 0; slotIndex--) {
      if (deviceSlots[slotIndex] === '0') continue;

      rowDeviceCount += 1;
    }

    if (rowDeviceCount > 0) {
      beams += rowDeviceCount * previousRowDeviceCount;
      previousRowDeviceCount = rowDeviceCount;
      rowDeviceCount = 0;
    }
  }

  return beams;
};

const tests: ITest[] = [
  { input: [['011001', '000000', '010100', '001000']], expected: 8, func: numberOfBeams },
  { input: [['000', '111', '000']], expected: 0, func: numberOfBeams },
];

console.table(captureTestResults(tests));
