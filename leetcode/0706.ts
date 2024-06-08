/**
 * Design HashMap
 * https://leetcode.com/problems/design-hashmap/submissions/1282107206/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 158 ms - Beats 84.44%
 * Memory:  60.59 MB - Beats 78.52%
 */

class MyHashMap {
  #store: Record<number, number> = {};

  put(key: number, value: number): void {
    this.#store[key] = value;
  }

  get(key: number): number {
    return this.#store[key] ?? -1;
  }

  remove(key: number): void {
    delete this.#store[key];
  }
}