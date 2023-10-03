/**
 * LeetCode Roman to Integer problem: https://leetcode.com/problems/roman-to-integer/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 113ms   - Beats 58.35% of users with TypeScript
 * Memory:  47.60MB - Beats 83.70% of users with TypeScript
 */

type RSymbol = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

const rSymbolMap: Record<RSymbol, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const sLength = s.length;
  let sum = 0;
  let charIndex = 0;

  while (charIndex < sLength) {
    const currentChar = rSymbolMap[s[charIndex] as RSymbol];
    const nextChar = rSymbolMap[s[charIndex + 1] as RSymbol];

    if (currentChar < nextChar) {
      sum -= currentChar;
    } else {
      sum += currentChar;
    }

    ++charIndex;
  }

  return sum;
}

export { romanToInt };
