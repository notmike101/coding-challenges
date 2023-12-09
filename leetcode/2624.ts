/**
 * Snail Traversal
 * https://leetcode.com/problems/snail-traversal/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 185ms - Beats 78.61%
 * Memory:  65.14 MB - Beats 10.98%
 */

declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function(rowsCount: number, colsCount: number): number[][] {
  if (this.length !== rowsCount * colsCount) return [];

  const output: number[][] = [];
  let isReversedRow = false;

  for (let i = 0; i < this.length; i += rowsCount) {
    let chunk: number[] = this.slice(i, i + rowsCount);

    if (isReversedRow) {
      chunk = chunk.reverse();
    }
    
    isReversedRow = !isReversedRow;
    
    for (let j = 0; j < rowsCount; ++j) {
      if (!output[j]) output[j] = [];

      output[j].push(chunk[j]);
    }
  }

  return output;
}

export {};

// Not using testControl functions since it's not set up to handle prototypes...
const test = () => {
  const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  console.log(input.snail(8, 5));
};

test();
