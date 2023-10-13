# /**
#  * Hack Reactor Intersection of Arrays problem
#  * Mike Orozco (notmike101)
#  * 
#  * Given a 2D integer list `nums` (a list of lists) where each list in `nums` is
#  * a non-empty array of distinct positive integers, return the list of integers
#  * that are present in each array of nums sorted in ascending order.
#  * 
#  * Test cases:
#  *  Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
#  *  Output: [3,4]
#  *  Explanation: The only integers present in each of the nums list are 3 and 4,
#  *    so we return [3,4]
#  * 
#  *  Input: nums = [[1,2,3], [4,5,6]]
#  *  Output: []
#  *  Explanation: There does not exist any integer present in both nums lists, so
#  *    we return an empty list
#  */

import time

def getIntersectingValues(nums):
  fullNumList = []
  letterCounts = {}
  lengthOfNums = len(nums)
  output = []

  for numList in nums:
    for num in numList:
      fullNumList.append(num)

  for num in fullNumList:
    if num in letterCounts.keys():
      letterCounts[num] += 1
    else:
      letterCounts[num] = 1

  for num, count in letterCounts.items():
    if count >= lengthOfNums:
      output.append(num)

  output.sort()

  return output

tests = [
  { "input": [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], "output": [3,4] },
  { "input": [[1,2,3], [4,5,6]], "output": [] },
]

for testNumber, test in enumerate(tests):
  input = test["input"]
  output = test["output"]
  startTime = time.time()
  result = getIntersectingValues(input)
  runTime = startTime - time.time()

  print('Test %s: %s' % (testNumber, 'PASS' if result == output else 'FAIL'))
  print('Input:', str(input))
  print('Expected Result:', output)
  print('Output:', result)
  print('Runtime: %s\n' % runTime)
