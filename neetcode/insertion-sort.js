/**
 * NeetCode Insertion Sort problem: https://neetcode.io/problems/insertionSort
 * Mike Orozco (notmike101)
 */

/**
 * Pair class to store key-value pairs
 */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }

class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  static insertionSort(pairs) {
    const output = [];
    let pairsLength = pairs.length;

    for (let i = 0; i < pairsLength; ++i) {
      const tempVal = pairs[i];
      let j = i - 1;

      while (j >= 0 && pairs[j].key > tempVal.key) {
        pairs[j + 1] = pairs[j--];
      }

      pairs[j + 1] = tempVal;

      output.push([...pairs]);
    }

    return output;
  }
}
