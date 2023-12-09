/**
 * Group By
 * https://leetcode.com/problems/group-by/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 124ms - Beats 56.22%
 * Memory:  65.12 MB - Beats 56.22%
 */

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

export {}

Array.prototype.groupBy = function(fn) {
  const output = {};

  for (let i = this.length - 1, j = 0; i >= 0; --i, ++j) {
    const elm = this[j];
    const key = fn(elm);

    if (output[key] === undefined) output[key] = [];
    
    output[key].push(elm);
  }

  return output;
};