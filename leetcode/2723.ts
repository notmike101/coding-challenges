/**
 * Add Two Promises
 * https://leetcode.com/problems/add-two-promises/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 73ms - Beats 11.28%
 * Memory:  43.10 MB - Beats 41.78%
 */

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  const [num1, num2] = await Promise.all([promise1, promise2]);

  return num1 + num2;
};
