/**
 * Divide an Array Into Subarrays With Minimum Cost I
 * https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 90ms - Beats 11.76%
 * Memory:  53.94 MB - Beats 44.12%
 */

const minimumCost = (nums: number[]): number => {
  const sortHandler = (a: number, b: number) => a - b;
  let cost = nums[0];

  nums.splice(0, 1);
  nums.sort(sortHandler);

  cost += nums[0] + nums[1];

  return cost;
};

const test1 = () => {
  const input = [1,2,3,12];
  const output = minimumCost(input);

  console.assert(output === 6, `Expected 6, got ${output}`);
};

const test2 = () => {
  const input = [5,4,3];
  const output = minimumCost(input);

  console.assert(output === 12, `Expected 12, got ${output}`);
};

const test3 = () => {
  const input = [10,3,1,1];
  const output = minimumCost(input);

  console.assert(output === 12, `Expected 12, got ${output}`);
};

test1();
test2();
test3();