/**
 * LeetCode Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description
 * Mike Orozco (notmike101)
 * 
 * Runtime: 105ms - Beats 82.20%
 * Memory: 62.37 MB - Beats 34.24%
 */

import captureTestResults, { type ITest } from '../testControl.ts';

const groupAnagrams = (strs: string[]): string[][] => {
  const stringMap = new Map<number, string[]>();
  let charSum = 0,
      i = strs.length - 1,
      j = 0;

  while(strs[i] !== undefined) {
    charSum = 0;

    while (strs[i][j] !== undefined) {
      charSum += strs[i].charCodeAt(j) ** 4;

      ++j;
    }

    (stringMap.get(charSum) ?? stringMap.set(charSum, []).get(charSum))!.push(strs[i]);

    --i;
    j = 0;
  }

  return Array.from(stringMap.values());
};

const tests: ITest[] = [
  {
    input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    expected: [['bat'], ['nat', 'tan'], ['ate', 'eat','tea']],
    func: groupAnagrams,
  },
  // {
  //   input: [["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]],
  //   expected: [["max"],["buy"],["doc"],["may"],["ill"],["duh"],["tin"],["bar"],["pew"],["cab"]],
  //   func: groupAnagrams,
  // },
  // { 
  //   input: [["run","had","lot","kim","fat","net","fin","rca","chi","lei","lox","iva","liz","hug","hot","irk","lap","tan","tux","yuk","hep","map","ran","ell","kit","put","non","aol","add","lad","she","job","mes","pen","vic","fag","bud","ken","nod","jam","coy","hui","sue","nap","ton","coy","rut","fit","cut","eta","our","oho","zip"]],
  //   expected: [["zip"],["eta"],["cut"],["fit"],["ton"],["coy","coy"],["jam"],["ken"],["bud"],["fag"],["nap"],["vic"],["oho"],["mes"],["job"],["she"],["iva"],["had"],["hep"],["lad"],["lox"],["aol"],["rut"],["nod"],["pen"],["chi"],["ell"],["fat"],["hot"],["tux"],["liz"],["lot"],["ran"],["net"],["hui"],["rca"],["lei"],["fin"],["run"],["sue"],["irk"],["hug"],["lap"],["our"],["tan"],["yuk"],["map"],["kit"],["kim"],["put"],["non"],["add"]],
  //   func: groupAnagrams,
  // },
  { input: [['']], expected: [['']], func: groupAnagrams },
  { input: [['a']], expected: [['a']], func: groupAnagrams },
];

console.table(captureTestResults(tests));
