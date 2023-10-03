/**
 * LeetCode Debounce problem: https://leetcode.com/problems/debounce/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms  - Beats 78.5%
 * Memory: 42.5MB - Beats 79.33%
 */

type F = (...args: number[]) => void

const debounce = (fn: F, t: number): F => {
  let debounced: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(debounced);

    debounced = setTimeout(() => {
      fn(...args)
    }, t);
  };
};
