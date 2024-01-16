/**
 * Valid Anagram
 * Find Players With Zero or One Losses
 * Mike Orozco (notmike101)
 * 
 * Runtime: 331ms - Beats 56.03%
 * Memory:  124.74MB - Beats 29.31%
 */

const sortCallback = (a: number, b: number) => a - b;

const findWinners = (matches: number[][]): number[][] => {
  const playerLossTracker = new Map<number, number>(),
        finalIndex = matches.length,
        result: number[][] = [[], []];
  let matchIndex = 0,
      playerID: number,
      loses: number,
      winnerID: number,
      loserID: number;

  while (matchIndex !== finalIndex) {
    [winnerID, loserID] = matches[matchIndex];

    if (!playerLossTracker.has(winnerID)) playerLossTracker.set(winnerID, 0);
    if (!playerLossTracker.has(loserID)) playerLossTracker.set(loserID, 0);

    playerLossTracker.set(loserID, playerLossTracker.get(loserID)! + 1);

    ++matchIndex;
  }

  for ([playerID, loses] of playerLossTracker) {
    if (loses === 0) result[0].push(playerID);
    if (loses === 1) result[1].push(playerID);
  }

  result[0].sort(sortCallback);
  result[1].sort(sortCallback);

  return result;
};

const test1 = () => {
  const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
  const output = findWinners(matches);

  console.assert(output.toString() === '1,2,10,4,5,7,8', `Expected [[1,2,10],[4,5,7,8]], got ${output}`);
};

const test2 = () => {
  const matches = [[2,3],[1,3],[5,4],[6,4]];
  const output = findWinners(matches);

  console.assert(output.toString() === '1,2,5,6,', `Expected [[1,2,5,6],[]], got ${output}`);
};

const test3 = () => {
  const matches = [[132,71],[71,132]];
  const output = findWinners(matches);

  console.assert(output.toString() === ',71,132', `Expected [[], [71,132], got ${output}`);
};

test1();
test2();
test3();