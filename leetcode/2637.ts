/**
 * Promise Time Limit
 * https://leetcode.com/problems/promise-time-limit/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 50ms - Beats 96.12%
 * Memory:  42.85MB - Beats 58.91%
 */

type Fn = (...params: any[]) => Promise<any>;

const timeLimit = (fn: Fn, t: number): Fn => {
	return async function(...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject('Time Limit Exceeded')
        }, t)
      }),
    ]);
  };
};