/**
 * LeetCode Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 62ms (Beats 80.16%)
 * Memory:  45.69MB (Beats 33.13%)
 */

const removeDuplicates = (nums: number[]): number => {
  const newNums = [...new Set(nums)].sort((numA, numB) => {
    if (numA < numB) return -1;
    if (numA === numB) return 0;
    return 1;
  });

  const finalIndex = newNums.length;
  let newNumIndex = 0

  while (newNumIndex < finalIndex) {
    nums[newNumIndex] = newNums[newNumIndex];
    ++newNumIndex;
  }

  return newNums.length;
};
