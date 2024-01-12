/**
 * Determine if String Halves Are Alike
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/description
 * Mike Orozco (notmike101)
 * 
 * Runtime: 65ms - Beats 51.43%
 * Memory:  43.40 MB - Beats 91.43%
 */

import { captureTestResults, type ITest } from '../testControl.ts';


const halvesAreAlike = (s: string): boolean => {
  let lowercaseS = s.toLowerCase(),
      vowelBalance = 0,
      i = s.length / 2 - 1,
      j = s.length - 1,
      firstHalfChar,
      secondHalfChar;

  while (i >= 0) {
    firstHalfChar = lowercaseS[i];
    secondHalfChar = lowercaseS[j];

    if (firstHalfChar === 'a' || firstHalfChar === 'e' || firstHalfChar === 'i' || firstHalfChar === 'o' || firstHalfChar === 'u') {
      vowelBalance += 1;
    }

    if (secondHalfChar === 'a' || secondHalfChar === 'e' || secondHalfChar === 'i' || secondHalfChar === 'o' || secondHalfChar === 'u') {
      vowelBalance -= 1;
    }

    --i;
    --j;
  }

  return vowelBalance === 0;
};

const tests: ITest[] = [
  { input: 'book', expected: true, func: halvesAreAlike },
  { input: 'textbook', expected: false, func: halvesAreAlike },
  { input: 'aeiouabcdefaeiouabcdef', expected: true, func: halvesAreAlike },
  { input: 'BoOk', expected: true, func: halvesAreAlike },
  { input: 'BoOzoK', expected: false, func: halvesAreAlike },
];

console.table(captureTestResults(tests));

