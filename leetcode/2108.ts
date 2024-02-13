/**
 * LeetCode Find First Palindromic String In The Array
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/submissions/1173957295/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 80ms - Beats 53.54%
 * Memory:  55.45 MB - Beats 27.12%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const firstPalindrome = (words: string[]): string => {
  let i = 0,
      wordsLen = words.length,
      j: number,
      k: number,
      validWord: boolean;

  while (i < wordsLen) {
    validWord = true;
    k = words[i].length - 1;
    j = 0;

    while (j < k) {
      if (words[i][j++] !== words[i][k--]) {
        validWord = false;
        break;
      }
    }

    if (validWord) {
      return words[i];
    }

    ++i;
  }

  return '';
};

const tests: ITest[] = [
  { input: [["abc","car","ada","racecar","cool"]], expected: 'ada', func: firstPalindrome },
  { input: [["notapalindrome","racecar"]], expected: 'racecar', func: firstPalindrome },
  { input: [["def","ghi"]], expected: '', func: firstPalindrome },
];

console.table(captureTestResults(tests));
