/**
 * Hack Reactor Unique Integer Sum Problem
 * Mike Orozco (notmike101)
 * 
 * Given a list of integers, calculate the sum of the unique entries in the
 * list. This is the same as removing the duplicates from the list, then
 * calculating the sum.
 */

export const sumOfUnique = (nums: number[]) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const uniqueNums = [...new Set(nums)];
  let sum = 0;
  let index = uniqueNums.length - 1;

  while (index >= 0) {
    sum += uniqueNums[index];
    --index;
  }

  return sum;
};
