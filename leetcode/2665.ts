/**
 * Counter II
 * https://leetcode.com/problems/counter-ii/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 62ms - Beats 66.13%
 * Memory:  44.53 MB - Beats 29.87%
 */

type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

const createCounter = (init: number): Counter => {
  let count = init;

  return {
    increment: () => {
      return ++count;
    },
    reset() {
      count = init;
      return count;
    },
    decrement() {
      return --count;
    },
  };
};

const test0 = () => {
  const counter = createCounter(5)

  console.log(counter.increment());
  console.log(counter.reset());
  console.log(counter.decrement());
};

test0();