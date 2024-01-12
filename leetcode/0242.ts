/**
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 100ms - Beats 17.23%
 * Memory:  49.59 MB - Beats 17.01%
 * 
 * Note: I'll do this "correctly" later, I'm tired...
 */

import { captureTestResults, type ITest } from "../testControl.ts";

const isAnagram = (s: string, t: string): boolean => [...s].sort().toString() === [...t].sort().toString();

const tests: ITest[] = [
  { input: ['anagram', 'nagaram'], expected: true, func: isAnagram },
  { input: ['rat', 'car'], expected: false, func: isAnagram },
];

console.table(captureTestResults(tests));