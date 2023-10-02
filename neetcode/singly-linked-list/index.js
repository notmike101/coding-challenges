/**
 * NeetCode Singly Linked List problem: https://neetcode.io/problems/singlyLinkedList
 * Mike Orozco (notmike101)
 */

class LinkedList {
  #nodes;

  constructor() {
    this.#nodes = [];
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (this.#nodes[index]) {
      return this.#nodes[index];
    }

    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    this.#nodes.unshift(val);
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    this.#nodes.push(val);
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (index > this.#nodes.length - 1) return false;

    this.#nodes.splice(index, 1);

    return true;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    return this.#nodes;
  }
}
