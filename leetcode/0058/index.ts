/**
 * LeetCode Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 59ms (Beats 30.77%)
 * Memory:  42.36MB (Beats 90.22%)
 */

import captureTestResults, { type ITest } from '../../testControl';

const lengthOfLastWord = (s: string): number => {
  let counter = 0;

  for (let index = s.length - 1; index >= 0; --index) {
    if (s[index] !== ' ') {
      counter += 1;
    } else if (counter !== 0 && s[index] === ' ') {
      break;
    } else {
      counter = 0;
    }
  }

  return counter;
};

const tests: ITest[] = [
  { input: 'Hello World', expected: 5, func: lengthOfLastWord },
  { input: '   fly me   to   the moon  ', expected: 4, func: lengthOfLastWord },
  { input: 'luffy is still joyboy', expected: 6, func: lengthOfLastWord },
];

console.table(captureTestResults(tests));
