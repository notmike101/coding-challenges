/**
 * First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 94ms - Beats 60.74%
 * Memory:  45.69 MB - Beats 77.45%
 */


import { captureTestResults, type ITest } from '../testControl.ts';

const firstUniqChar = (s: string): number => {
  if (s.length === 1) return 0;

  for (let i = 0; i < s.length; ++i) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};

const tests: ITest[] = [
  { input: 'leetcode', expected: 0, func: firstUniqChar },
  { input: 'loveleetcode', expected: 2, func: firstUniqChar },
  { input: 'aabb', expected: -1, func: firstUniqChar },
  { input: 'z', expected: 0, func: firstUniqChar },
  { input: 'dddccdbba', expected: 8, func: firstUniqChar },
];

console.table(captureTestResults(tests));
