/**
 * Hack Reactor Intersection of Arrays problem
 * Mike Orozco (notmike101)
 * 
 * Given a 2D integer list `nums` (a list of lists) where each list in `nums` is
 * a non-empty array of distinct positive integers, return the list of integers
 * that are present in each array of nums sorted in ascending order.
 * 
 * Test cases:
 *  Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
 *  Output: [3,4]
 *  Explanation: The only integers present in each of the nums list are 3 and 4,
 *    so we return [3,4]
 * 
 *  Input: nums = [[1,2,3], [4,5,6]]
 *  Output: []
 *  Explanation: There does not exist any integer present in both nums lists, so
 *    we return an empty list
 */

const getIntersectingValues = (nums: number[][]) => {
  const fullNumList = ([] as number[]).concat(...nums);
  const numberOfLists = nums.length;
  const letterCounts = new Map<number, number>();
  let index = fullNumList.length - 1;

  while (index >= 0) {
    const num = fullNumList[index];
    const letterCount = letterCounts.get(num);

    if (letterCount) {
      letterCounts.set(num, letterCount + 1);
    } else {
      letterCounts.set(num, 1);
    }

    --index;
  }

  for (const letterCountEntry of letterCounts) {
    if (letterCountEntry[1] < numberOfLists) {
      letterCounts.delete(letterCountEntry[0]);
    }
  }

  return [...letterCounts.keys()].sort();
};

export { getIntersectingValues };
