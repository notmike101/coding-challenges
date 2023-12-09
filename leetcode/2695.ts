/**
 * Array Wrapper
 * https://leetcode.com/problems/array-wrapper/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 55ms - Beats 63.68%
 * Memory:  45.26 MB - Beats 15.76%
 */

class ArrayWrapper {
  #store: number[];
    
	constructor(nums: number[]) {
    this.#store = nums;
  }

	valueOf(): number {
    let output = 0;
  
    for (let i = this.#store.length - 1; i >= 0; --i) {
      output += this.#store[i];
    }

    return output;
  }

	toString(): string {
    return '[' + this.#store.toString() + ']';
  }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

const test = () => {
  const obj1 = new ArrayWrapper([1,2]);
  const obj2 = new ArrayWrapper([3,4]);

  console.log((obj1 as unknown as number) + (obj2 as unknown as number)); // 10

  console.log(String(obj1)); // "[1,2]"
  console.log(String(obj2)); // "[3,4]"
};

test();