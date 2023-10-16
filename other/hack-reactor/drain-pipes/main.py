# Hack Reator Drain Pipes Problem
# Given the number of pipes `num_pipes` and a list of `steps`, complete the
# funtion `pipe_outputs` to return a list that contains the flow of each pipe
# in the order starting with the first pipe to the last pipe.
# 
#  * At the beginning, each of the `num_pipes` has a flow of 8
#  * In the list of `steps`, each step is a list
#    * If the step has one value in it, then it joins that pipe with the one to
#      its right
#    * If the step has two values in it, then the first value is the pipe to
#      split, and the second value is the flow that goes into the pipe to the
#      left, while the remainder of the flow goes into the pipe to the right.
# 
# Example:
#  * Input: `num_pipes` = 3, steps = [[2, 4], [1], [1], [1, 2]]
#  * Output: [2, 14, 8]

import time

def pipe_outputs(num_pipes, steps):
  pipeMap = [8] * num_pipes

  for step in steps:
    targetPipeIndex = step[0] - 1
  
    if (len(step) == 2):
      mergeRightVal = step[1]
      mergeLeftVal = pipeMap[targetPipeIndex] - mergeRightVal
      pipeMap[targetPipeIndex] = mergeLeftVal
      pipeMap.insert(targetPipeIndex, mergeRightVal)
    else:
      pipeMap[targetPipeIndex + 1] += pipeMap[targetPipeIndex]
      del pipeMap[targetPipeIndex]
  
  return pipeMap
  
## Tests ##
tests = [
  { "input": [3, [[2, 4], [1], [1], [1, 2]]], "output": [2, 14, 8] }
]

for testNumber, test in enumerate(tests):
  input = test["input"]
  output = test["output"]
  startTime = time.time()
  result = pipe_outputs(input[0], input[1])
  runTime = startTime - time.time()

  print('Test %s: %s' % (testNumber, 'PASS' if result == output else 'FAIL'))
  print('Input:', str(input))
  print('Expected Result:', output)
  print('Output:', result)
  print('Runtime: %s\n' % runTime)
