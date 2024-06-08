/**
 * Design HashSet
 * https://leetcode.com/problems/design-hashset/submissions/1282102659/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 153 ms - Beats 73.42%
 * Memory:  62.48 MB - Beats 55.70%
 */

class MyHashSet {
  #store: any[] = [];

  constructor() {}

  add(key: number): void {
    this.#store[key] = key;
  }
  
  remove(key: number): void {
    delete this.#store[key];
  }

  contains(key: number): boolean {
    return this.#store[key] !== undefined;
  }
}
