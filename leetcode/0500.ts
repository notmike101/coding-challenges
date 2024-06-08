/**
 * Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 47ms - Beats 93.81%
 * Memory:  50.18 MB - Beats 81.42%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const keyboard = new Array<Set<string>>(
  new Set(['q','w','e','r','t','y','u','i','o','p']),
  new Set(['a','s','d','f','g','h','j','k','l']),
  new Set(['z','x','c','v','b','n','m']),
);

const findWords = (words: string[]): string[] => {
  const output = new Array<string>();
  let i: number,
      j: number,
      word: string,
      keyboardRow: Set<string>,
      isValid: boolean;

  for (i = words.length - 1; i >= 0; --i) {
    word = words[i].toLowerCase();
    keyboardRow = keyboard[keyboard[0].has(word[0]) ? 0 : keyboard[1].has(word[0]) ? 1 : 2];
    isValid = true;

    for (j = word.length - 1; j > 0; --j) {
      if (!keyboardRow.has(word[j])) {
        isValid = false;
        break;
      }
    }
    
    if (isValid === false) continue;

    output.push(words[i]);
  }

  return output;
};

const test = (result: any, expected: any): boolean => {
  if (result.length !== expected.length) return false;

  for (const singleResultEntry of (result as string[])) {
    if (!(expected as string[]).includes(singleResultEntry)) {
      return false;
    }
  }

  return true;
}

const tests: ITest[] = [
  { input: [['Hello','Alaska', 'Dad', 'Peace']], expected: ['Alaska', 'Dad'], func: findWords, testFunc: test },
  { input: [['omk']], expected: [], func: findWords, testFunc: test },
  { input: [['asdf', 'sfd']], expected: ['asdf', 'sfd'], func: findWords, testFunc: test },
];

console.table(captureTestResults(tests));
