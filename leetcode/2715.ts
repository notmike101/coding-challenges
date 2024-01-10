/**
 * Timeout Cancellation
 * https://leetcode.com/problems/timeout-cancellation/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms - Beats 94.99%
 * Memory:  43.27MB - Beats 32.45%
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

const cancellable = (fn: Fn, args: JSONValue[], t: number): Function => {
  const timeout = setTimeout(fn, t, ...args);
  return () => clearTimeout(timeout);
};
