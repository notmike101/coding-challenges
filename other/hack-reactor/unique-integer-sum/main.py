# Hack Reactor Unique Integer Sum Problem
# Mike Orozco (notmike101)

# Given a list of integers, calculate the sum of the unique entries in the list.
# This is the same as removing the duplicates from the list, then calculating the
# sum

def sum_of_unique(nums):
  return sum(list(set(nums)))

tests = [
  [[1, 1, 1], 1],
  [[1, 2, 3], 6],
  [[1, 3, 1], 4],
  [[2, 3, 4, 2, 3], 9]
]

for (testNumber, test) in enumerate(tests):
  input = test[0]
  expectedOutput = test[1]
  output = sum_of_unique(test[0])
  
  print('Test', testNumber + 1, ':', 'PASS' if test[1] == output else 'FAIL')
  print('Input:', input)
  print('Output:', output)
  print('Expected:', expectedOutput)
  print('')
