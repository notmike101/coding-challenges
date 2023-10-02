/**
 * NeetCode Dynamic Array problem: https://neetcode.io/problems/dynamicArray
 * Mike Orozco (notmike101)
 */

class DynamicArray {
  /**
   * Capacity of the array
   * 
   * @type {number}
   * @private
   */
  #capacity;

  /**
   * Elements of the array
   * 
   * @type {number[]}
   * @private
   */
  #elements;

  /**
   * Length of the array
   * 
   * @type {number}
   * @private
   */
  #length;

  /**
   * Creates a dynamic array
   * 
   * @constructor
   * @param {number} capacity - Capacity of the array
   * @throws {Error} If capacity is less than or equal to 0
   */
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0");
    }

    this.#length = 0;
    this.#capacity = capacity;
    this.#elements = new Array(capacity).fill(0);
  }

  /**
   * Get the element at index i
   * 
   * @param {number} i - Index of the element
   * @returns {number} The element at index i
   */
  get(i) {
    return this.#elements[i];
  }

  /**
   * Replaces the element at index i with n
   * 
   * @param {number} i - Index of the array to replace
   * @param {number} n - New value
   */
  insert(i, n) {
    this.#elements[i] = n;
  }

  /**
   * Add an element to the end of the array
   * 
   * @param {number} n - Element to add
   */
  pushback(n) {
    if (this.#length === this.#capacity) {
      this.resize();
    }

    this.#elements[this.#length] = n;
    this.#length += 1;
  }

  /**
   * Remove the last element of the array and return it
   * 
   * @returns {number} The last element of the array
   */
  popback() {
    if (this.#length > 0) this.#length -= 1;

    return this.#elements[this.#length];
  }

  /**
   * Double the size of the array
   */
  resize() {
    const newElements = new Array(this.#capacity * 2);

    for (const index in this.#elements) {
      newElements[index] = this.#elements[index];
    }

    this.#capacity = this.#capacity * 2;
    this.#elements = newElements;
  }

  /**
   * Get the length of the array
   * 
   * @returns {number} The length of the array
   */
  getSize() {
    return this.#length;
  }

  /**
   * Get the capacity of the array
   * 
   * @returns {number} The capacity of the array
   */
  getCapacity() {
    return this.#capacity;
  }
}

const test1 = () => {
  const dynamicArray = new DynamicArray(1);
  const output = [
    dynamicArray,
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

const test2 = () => {
  const dynamicArray = new DynamicArray(5);
  const output = [
    dynamicArray,
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

const test3 = () => {
  const dynamicArray = new DynamicArray(3);
  const output = [
    dynamicArray,
    dynamicArray.pushback(1),
    dynamicArray.pushback(2),
    dynamicArray.pushback(3),
    dynamicArray.get(0),
    dynamicArray.get(1),
    dynamicArray.get(2),
  ];

  console.log(...output);
};

const test4 = () => {
  const dynamicArray = new DynamicArray(4);
  const output = [
    dynamicArray,
    dynamicArray.pushback(1),
    dynamicArray.insert(0, 0),
    dynamicArray.pushback(2),
    dynamicArray.get(0),
    dynamicArray.get(1),
    dynamicArray.getCapacity(),
    dynamicArray.popback(),
  ];

  console.log(...output);
};

const test5 = () => {
  const dynamicArray = new DynamicArray(5);
  const output = [
    dynamicArray,
    dynamicArray.pushback(1),
    dynamicArray.pushback(2),
    dynamicArray.pushback(3),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.get(0),
  ];

  console.log(...output);
};

const test6 = () => {
  const dynamicArray = new DynamicArray(2);
  const output = [
    dynamicArray,
    dynamicArray.pushback(0),
    dynamicArray.pushback(1),
    dynamicArray.pushback(2),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

const test7 = () => {
  const dynamicArray = new DynamicArray(3);
  const output = [
    dynamicArray,
    dynamicArray.pushback(0),
    dynamicArray.pushback(1),
    dynamicArray.pushback(2),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

const test8 = () => {
  const dynamicArray = new DynamicArray(5);
  const output = [
    dynamicArray,
    dynamicArray.pushback(2),
    dynamicArray.pushback(4),
    dynamicArray.insert(0, 0),
    dynamicArray.get(0),
    dynamicArray.get(1),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

const test9 = () => {
  const dynamicArray = new DynamicArray(1);
  const output = [
    dynamicArray,
    dynamicArray.pushback(1),
    dynamicArray.getCapacity(),
    dynamicArray.pushback(2),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

const test10 = () => {
  const dynamicArray = new DynamicArray(1);
  const output = [
    dynamicArray,
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
    dynamicArray.pushback(1),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
    dynamicArray.pushback(2),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
    dynamicArray.get(1),
    dynamicArray.insert(1, 3),
    dynamicArray.get(1),
    dynamicArray.popback(),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};
const test11 = () => {
  const dynamicArray = new DynamicArray(1);
  const output = [
    dynamicArray,
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
    dynamicArray.pushback(1),
    dynamicArray.pushback(2),
    dynamicArray.pushback(3),
    dynamicArray.pushback(4),
    dynamicArray.pushback(5),
    dynamicArray.pushback(6),
    dynamicArray.pushback(7),
    dynamicArray.pushback(8),
    dynamicArray.pushback(9),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.popback(),
    dynamicArray.getSize(),
    dynamicArray.getCapacity(),
  ];

  console.log(...output);
};

test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
