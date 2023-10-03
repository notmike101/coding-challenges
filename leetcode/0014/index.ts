/**
 * LeetCode Longest Common Prefix problem: https://leetcode.com/problems/longest-common-prefix/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 49ms - Beats 93.33%
 * Memory: 43.91 MB - Beats 78.51%
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';
  if (strs.includes('')) return '';

  let strsIndex = strs.length - 1;
  let commonPrefix = strs[0];

  while (strsIndex >= 0) {
    while (!strs[strsIndex].startsWith(commonPrefix)) {
      commonPrefix = commonPrefix.slice(0, -1);
    }

    if (commonPrefix === '') {
      return commonPrefix;
    }

    --strsIndex;
  }

  return commonPrefix;
};

export { longestCommonPrefix };
