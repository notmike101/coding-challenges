import * as testedFunction from '.';

interface Test {
  input: number[];
  output: number;
}

const tests: Test[] = [
  { input: [1, 1, 1], output: 1 },
  { input: [1, 2, 3], output: 6 },
  { input: [1, 3, 1], output: 4 },
  { input: [2, 3, 4, 2, 3], output: 9 },
];

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
