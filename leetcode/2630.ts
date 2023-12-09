/**
 * Memoize II
 * https://leetcode.com/problems/memoize-ii
 * Mike Orozco (notmike101)
 * 
 * Runtime: 277ms - Beats 85.22%
 * Memory:  121.76 MB - Beats 19.13%
 */

type Fn = (...params: any) => any;

const memoize = (fn: Fn): Fn => {
  const cache = new Map<any, any>();
  const resultSymbol = Symbol('result');

  return function(...args) {
    let cacheLevel = cache;

    for (const arg of args) {
      if (!cacheLevel.has(arg)) {
        cacheLevel.set(arg, new Map<any, any>());
      }
      
      cacheLevel = cacheLevel.get(arg);
    }

    if (cacheLevel.has(resultSymbol)) return cacheLevel.get(resultSymbol);

    const result = fn(...args);
    
    cacheLevel.set(resultSymbol, result);

    return result;
  }
};

const test = () => {
  let callCount = 0;

  const func = (...arr: number[]) => arr.reduce((a, b) => a + b, 0);
  const memoizedFn = memoize(func);
  
  console.log('memoizedFn(1, 1, 1)', memoizedFn(1, 1, 1));
  console.log('memoizedFn(1, 1, 1)', memoizedFn(1, 1, 1));
  console.log('memoizedFn(1, 1)', memoizedFn(1, 1));
};

test();