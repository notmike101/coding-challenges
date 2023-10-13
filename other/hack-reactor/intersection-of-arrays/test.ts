import * as testedFunction from '.';

interface Test {
  input: number[][];
  output: number[];
}

const tests: Test[] = [
  { input: [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], output: [3,4] },
  { input: [[1,2,3], [4,5,6]], output: [] },
]

const captureRuntime = (test: Test) => {
  const targetRunFunction = Object.entries(testedFunction)[0][1];
  const startTime = performance.now();
  const result = targetRunFunction.apply(this, [test.input]);
  const runTime = performance.now() - startTime;

  return { result, runTime };
};

const main = () => {
  for (let testNumber = 0; testNumber < tests.length; ++testNumber) {
    const test = tests[testNumber];
    const { result, runTime } = captureRuntime(test);

    console.log(
`Test ${testNumber + 1}: ${result.toString() === test.output.toString() ? 'PASS' : 'FAIL'}
Runtime: ${runTime}s
Input: ${test.input}
Output: ${result}
Expected: ${test.output}
`
          );
  }
};

main();
