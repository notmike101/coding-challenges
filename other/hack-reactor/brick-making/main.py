# Hack Reactor Brick Making Problem
# Mike Orozco (notmike101)
# 
# We want to make a row of bricks that is `goal` units long. We have a number of
# small bricks (1 unit each) and big bricks (5 units each). Create a function that
# returns True if it is possible to make the goal by choosing from the given
# bricks, otherwise False.

import math as math

def can_make_row(num_short, num_long, goal):
  longs_needed = math.trunc(goal / 5)

  return (
    (num_long >= longs_needed and num_short >= goal % 5) or
    (num_long < longs_needed and num_short >= goal - (num_long * 5))
  )

tests = [
  [[5, 2, 15], True],
  [[5, 1, 14], False],
  [[0, 1, 1], False],
  [[5, 9, 100], False],
]

for (testNumber, test) in enumerate(tests):
  input = test[0]
  expectedOutput = test[1]
  output = can_make_row(test[0][0], test[0][1], test[0][2])
  
  print('Test', testNumber + 1, ':', 'PASS' if test[1] == output else 'FAIL')
  print('Input:', input)
  print('Output:', output)
  print('Expected:', expectedOutput)
  print('')
