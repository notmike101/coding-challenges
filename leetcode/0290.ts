/**
 * Word Pattern
 * https://leetcode.com/problems/word-pattern
 * 
 * Runtime: 58ms - Beats 42.21%
 * Memory:  49.85 MB - Beats 15.02%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const wordPattern = (pattern: string, s: string): boolean => {
  const splitString = s.split(' ');

  if (splitString.length !== pattern.length) return false;

  const patternMap = new Map<string, string>();
  const wordMap = new Map<string, string>();

  for (let i = 0; i < splitString.length; ++i) {
    if (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== splitString[i]) {
      return false;
    } else if (wordMap.has(splitString[i]) && wordMap.get(splitString[i]) !== pattern[i]) {
      return false;
    }

    patternMap.set(pattern[i], splitString[i]);
    wordMap.set(splitString[i], pattern[i]);
  }

  return true;
};

const tests: ITest[] = [
  { input: ['abba', 'dog cat cat dog'], expected: true, func: wordPattern },
  { input: ['abba', 'dog cat cat fish'], expected: false, func: wordPattern },
  { input: ['aaaa', 'dog cat cat dog'], expected: false, func: wordPattern },
  { input: ['abba', 'dog dog dog dog'], expected: false, func: wordPattern },
];

console.table(captureTestResults(tests));
