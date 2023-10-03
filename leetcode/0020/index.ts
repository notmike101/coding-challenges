/**
 * LeetCode Valid Parentheses problem: https://leetcode.com/problems/valid-parentheses/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 44ms - Beats 98.74%
 * Memory: 45.45 MB Beats 10.95%
 */

const bracketMap: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const isValid = (s: string): boolean => {
  if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;

  let parens: string[] = [];

  for (const char of s) {
    if (bracketMap[char]) {
      if (parens.length === 0) return false;
      if (bracketMap[char] !== parens.pop()) return false;
    } else {
      parens.push(char);
    }
  }

  return parens.length === 0;
};

export { isValid };
