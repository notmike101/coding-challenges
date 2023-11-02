/**
 * LeetCode Remove Element
 * https://leetcode.com/problems/remove-element/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 52ms (Beats 76.29%)
 * Memory:  44.49MB (Beats 22.37%)
 */

const removeElement = (nums: number[], val: number): number => {
  let size = 0;

  for (let num of nums) {
    if (num !== val) {
      nums[size++] = num;
    }
  }

  return size;
};
