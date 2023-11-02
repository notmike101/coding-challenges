/**
 * LeetCode Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 87ms    - Beats 88.48%
 * Memory:  48.51MB - Beats 32.01%
 */

import captureTestResults, { type ITest } from "../testControl";

const lengthOfLongestSubstring = (s: string): number => {
  let longestSubstringLength = 0;
  let currentSubstring = '';

  for (let index = 0; index < s.length; ++index) {
    const currentCharacter = s[index];
    const currentCharacterIndex = currentSubstring.indexOf(currentCharacter);

    if (currentCharacterIndex !== -1) {
      longestSubstringLength = longestSubstringLength > currentSubstring.length ? longestSubstringLength : currentSubstring.length;
      currentSubstring = currentSubstring.slice(currentCharacterIndex + 1);
    }

    currentSubstring += currentCharacter;
  }

  return longestSubstringLength > currentSubstring.length ? longestSubstringLength : currentSubstring.length;
};

const tests: ITest[] = [
  { input: 'abcabcbb', expected: 3, func: lengthOfLongestSubstring },
  { input: 'bbbbb', expected: 1, func: lengthOfLongestSubstring },
  { input: 'pwwkew', expected: 3, func: lengthOfLongestSubstring },
];

console.table(captureTestResults(tests));
