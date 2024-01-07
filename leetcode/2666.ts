/**
 * Allow One Function Call
 * https://leetcode.com/problems/allow-one-function-call/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 57ms - Beats 50.62%
 * Memory:  42.78 MB - Beats 64.62%
 */


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

const once = (fn: Function): OnceFn => {
  let called = false;

  return function (...args) {
    if (called) return undefined;

    called = true;

    return fn(...args);
  };
};

const test0 = () => {
  const fn = (a: number, b: number, c: number): number => (a + b + c)
  const onceFn = once(fn)
 
  console.assert(onceFn(1,2,3) === 6);
  console.assert(onceFn(2,3,6) === undefined);
};

test0();