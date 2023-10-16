/**
 * Hack Reator Drain Pipes Problem
 * Given the number of pipes `num_pipes` and a list of `steps`, complete the
 * funtion `pipe_outputs` to return a list that contains the flow of each pipe
 * in the order starting with the first pipe to the last pipe.
 * 
 *  * At the beginning, each of the `num_pipes` has a flow of 8
 *  * In the list of `steps`, each step is a list
 *    * If the step has one value in it, then it joins that pipe with the one to
 *      its right
 *    * If the step has two values in it, then the first value is the pipe to
 *      split, and the second value is the flow that goes into the pipe to the
 *      left, while the remainder of the flow goes into the pipe to the right.
 * 
 * Example:
 *  * Input: `num_pipes` = 3, steps = [[2, 4], [1], [1], [1, 2]]
 *  * Output: [2, 14, 8]
 */

type Step = number[];

interface ITest {
  input: [number, Step[]];
  output: number[];
}

const pipe_outputs = (num_pipes: number, steps: Step[]) => {
  const pipeMap: number[] = Array.from(Array(num_pipes)).fill(8);  
  
  for (const step of steps) {
    const targetPipeIndex = step[0] - 1;

    if (step.length === 2) {
      const mergeRightVal = step[1];
      const mergeLeftVal = pipeMap[targetPipeIndex] - mergeRightVal;

      pipeMap[targetPipeIndex] = mergeLeftVal;
      pipeMap.splice(targetPipeIndex, 0, mergeRightVal);
    } else {
      pipeMap[targetPipeIndex + 1] += pipeMap[targetPipeIndex];
      pipeMap.splice(targetPipeIndex, 1);
    }
  }

  return pipeMap;
};

/** Tests */
const tests: ITest[] = [
  { input: [3, [[2, 4], [1], [1], [1, 2]]], output: [2, 14, 8] },
];

for (let i = 0; i < tests.length; ++i) {
  const test = tests[i];
  const { input, output } = test;
  const startTime = performance.now();
  const result = pipe_outputs.apply(this, input);
  const runTime = performance.now() - startTime;

  console.log(`Test ${i + 1}: ${result.toString() === output.toString() ? 'PASS' : 'FAIL'}
    Runtime: ${runTime}ms
    Input: ${input}
    Output: ${result}
    Expected: ${output}
`);
}