/**
 * LeetCode Longest Substring Without Repeating Characters problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Mike Orozco (notmike101) 
 */

function lengthOfLongestSubstring(s: string): number {
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

const tests = [
  { input: 'abcabcbb', output: 3 },
  { input: 'bbbbb', output: 1 },
  { input: 'pwwkew', output: 3 },
];

const main = () => {
  for (let i = 0; i < tests.length; ++i) {
    const test = tests[i];
    const result = lengthOfLongestSubstring(test.input);

    console.log(`Test ${i}: ${result === test.output ? 'PASS' : 'FAIL'}\nInput: ${test.input}\nOutput: ${result}\nExpected: ${test.output}\n`);
  }
};

main();
