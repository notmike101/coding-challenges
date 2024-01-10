/**
 * Interval Cancellation
 * https://leetcode.com/problems/interval-cancellation/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 73ms - Beats 30.07%
 * Memory:  43.70 MB - Beats 6.31%
 * 
 * Notes: All "good" solutions implement this exactly the same, leetcode timer sucks
 */


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

const cancellable = (fn: Fn, args: JSONValue[], t: number): Function => {
  fn(...args);

  const interval = setInterval(() => fn(...args), t);

  return () => clearInterval(interval);
};
