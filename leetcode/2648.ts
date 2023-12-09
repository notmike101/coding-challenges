/**
 * Generate Fibonacci Sequence
 * https://leetcode.com/problems/generate-fibonacci-sequence/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 54ms - Beats 55.59%
 * Memory:  44.60 MB - Beats 12.24%
 */

function* fibGenerator(): Generator<number, any, number> {
	let currentFibIndex = 0;
  const sqrt5 = Math.sqrt(5);

  while (true) {
    yield Math.floor((1 / sqrt5) * (Math.pow(((1 + sqrt5) / 2), currentFibIndex) - (Math.pow(((1 - sqrt5) / 2), currentFibIndex++))));
  }
};

const test = () => {
  const gen = fibGenerator();

  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next().value); // 5
  console.log(gen.next().value); // 8
  console.log(gen.next().value); // 13
};

test();