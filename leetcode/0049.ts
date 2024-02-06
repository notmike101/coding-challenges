/**
 * LeetCode Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description
 * Mike Orozco (notmike101)
 * 
 * Runtime: 116 ms - Beats 55.03%
 * Memory: 62.88 MB - Beats 29.57%
 */

import captureTestResults, { type ITest } from '../testControl.ts';

const groupAnagrams = (strs: string[]): string[][] => {
  const stringMap = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!stringMap.has(sortedStr)) {
      stringMap.set(sortedStr, [str]);
    } else {
      stringMap.get(sortedStr)?.push(str);
    }
  }

  return Array.from(stringMap.values());
};

const tests: ITest[] = [
  { input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [['bat'], ['nat', 'tan'], ['ate', 'eat','tea']], func: groupAnagrams },
  { input: [['']], expected: [['']], func: groupAnagrams },
  { input: [['a']], expected: [['a']], func: groupAnagrams },
];

console.table(captureTestResults(tests));
