/**
 * Evenland used to be a normal country. Then Steven became ruler, and now everything must be done as he wishes. For
 * some odd reason, he is obsessed with the number two. Everything must be even in his country; hence, he even changed
 * the name to Evenland. The other day, Steven was driving through his country when he noticed that, at some
 * intersections, an odd number of roads meet. Naturally, some roads must now be destroyed in order to make the number
 * of roads even at every intersection. You are in charge of this project. You start wondering: in how many ways can
 * this project be carried out? In other words, in how many ways can you select a set of roads to destroy so that all
 * intersections become even? The resulting road network does not have to be connected, so for instance, one possible
 * way is to destroy all roads.
 *
 * Input:
 * The first line of the input contains two integers N and M, where 1 <= N, M <= 100,000. N denotes the number of
 * intersections in Evenland, and M is the number of roads. M lines follow, each containing two space-separated integers
 * (a, b) indicating that there is a road between intersections a and b. You may assume that 1 <= a, b <= N and a != b.
 * There may be more than one road connecting a pair of intersections.
 * 
 * Output:
 * Output one line with one integer - the number of ways of making all intersections even. Since this number might be
 * big, output the remainder modulo 1,000,000,009.
 * 
 * Examples:
 * Input: 4 5\n1 2\n1 3\n1 4\n2 3\n2 4
 * Expected: 4
 * 
 * Input: 2 1\n1 2
 * Expected: 1
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const evenlandRoadProject = (input: string) => {
  const inputs = input.split('\n');
  const [totalIntersections, totalRoads] = inputs.shift()!.split(' ').map((elm) => parseInt(elm));
  const roads = inputs.map((elm) => elm.split(' ').map((elm2) => parseInt(elm2)));
  const graph: Record<number, number[]> = {};
  const visited = new Array<boolean>(totalIntersections + 1).fill(false);
  let cycles = 0;

  for (const [a, b] of roads) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  const dfs = (v: number, p: number) => {
    visited[v] = true;

    for (const u of graph[v]) {
      if (u === p) continue;

      if (visited[u] || !dfs(u, v)) {
        return false;
      }
    }

    return true;
  };

  for (let i = 1; i < totalIntersections + 1; ++i) {
    if (visited[i] === false && dfs(i, -1) === false) {
      cycles += 1;
    }
  }

  return Math.pow(2, cycles) % 1000000009;
};

const tests: ITest[] = [
  { input: '4 5\n1 2\n1 3\n1 4\n2 3\n2 4', expected: 4, func: evenlandRoadProject },
  { input: '2 1\n1 2', expected: 1, func: evenlandRoadProject },
];

console.table(captureTestResults(tests));
