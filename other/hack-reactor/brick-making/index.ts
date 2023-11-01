/**
 * Hack Reactor Brick Making Problem
 * Mike Orozco (notmike101)
 * 
 * We want to make a row of bricks that is `goal` units long. We have a number
 * of small bricks (1 unit each) and big bricks (5 units each). Create a
 * function that returns True if it is possible to make the goal by choosing
 * from the given bricks, otherwise False
 */

const canMakeRow = (numShort: number, numLong: number, goal: number) => {
  const longsNeeded = Math.trunc(goal / 5);

  return (
    (numLong >= longsNeeded && numShort >= goal % 5) ||
    (numLong < longsNeeded && numShort >= (goal - (numLong * 5)))
  );
};

export { canMakeRow };
