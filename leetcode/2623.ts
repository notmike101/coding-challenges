/**
 * Memoize
 * https://leetcode.com/problems/memoize/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 281ms - Beats 74.33%
 * Memory:  108.34 MB - Beats 62.92%
 */

type Fn = (...params: number[]) => number;

const memoize = (fn: Fn): Fn => {
  const cache = new Map<string, number>();

  return function(...args) {
    const argString = args.toString();

    if (cache.has(argString)) {
      return cache.get(argString)!;
    }

    const result = fn(...args);
    
    cache.set(argString, result);

    return result;
  }
};

// Not using testControl because not set up to handle stuff like this...
const test = () => {
  let callCount = 0;
  const sum = (a: number, b: number) => a + b;
  const memoizedSum = memoize(sum);

  console.log(memoizedSum(2, 3));
  console.log(memoizedSum(2, 3));
  console.log(memoizedSum(3, 2));
  console.log(memoizedSum(2, 0));
  console.log(memoizedSum(0, 2));

  console.log('callCount', callCount);
};

test();
