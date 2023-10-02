/**
 * LeetCode Two Sum problem: https://leetcode.com/problems/two-sum/
 * Mike Orozco (notmike101)
 */

const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

const testCases = [
  { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] },
  { input: [[3, 2, 4], 6], expectedOutput: [1, 2] },
  { input: [[3, 3], 6], expectedOutput: [1, 0] },
  { input: [[-1, -2, -3, -4, -5], -8], expectedOutput: [2, 4] },
  { input: [[0, 4, 3, 0], 0], expectedOutput: [0, 3] },
];

const main = () => {
  for (let i = 0; i < testCases.length; ++i) {
    const startTime = performance.now();
    const input = testCases[i].input as [number[], number];
    const expectedOutput = testCases[i].expectedOutput;
    const output = twoSum.apply(null, input);
    const endTime = performance.now();
    
    console.log(`Test ${i} ${expectedOutput.toString() === output.toString() ? 'passed' : 'failed'} in ${endTime - startTime} seconds
    Input: ${input}
    Output: ${output}
    Expected Output: ${expectedOutput}
    \n`);
  }
};

main();
