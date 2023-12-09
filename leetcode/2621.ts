/**
 * LeetCode Sleep
 * https://leetcode.com/problems/sleep/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 52ms - Beats 77.94%
 * Memory:  42.26 MB - Beats 88.18%
 */

const sleep = async (millis: number) => new Promise<void>((resolve) => setTimeout(resolve, millis));

// Not using testControl because it's not set up to handle async functions yet
// And because this is stupidly easy.
