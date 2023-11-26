/**
 * LeetCode Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 66ms - Beats 64.12%
 * Memory:  44.71 MB - Beats 56.92%
 */

import captureTestResults, { type ITest } from '../testControl';

const isIsomorphic = (s: string, t: string): boolean => {
  const sCharCount = new Array(256).fill(0);
  const tCharCount = new Array(256).fill(0);

  for (let i = s.length; i--;) {
    const sCharCode = s.charCodeAt(i);
    const tCharCode = t.charCodeAt(i);

    if (sCharCount[sCharCode] !== tCharCount[tCharCode]) {
      return false;
    }

    sCharCount[sCharCode] = i + 1; 
    tCharCount[tCharCode] = i + 1;
  }

  return true;
};

const tests: ITest[] = [
  { input: ['egg', 'add'], expected: true, func: isIsomorphic },
  { input: ['foo', 'bar'], expected: false, func: isIsomorphic },
  { input: ['paper', 'title'], expected: true, func: isIsomorphic },
  { input: ['bbbaaaba', 'aaabbbba'], expected: false, func: isIsomorphic },
];

console.table(captureTestResults(tests));