import * as testedFunction from '.';

interface Test {
  input: [number, number, number];
  output: boolean;
}

const tests: Test[] = [
  { input: [5, 2, 15], output: true },
  { input: [5, 1, 14], output: false },
  { input: [0, 1, 1], output: false },
  { input: [5, 9, 100], output: false },
];

const captureRuntime = (test: Test) => {
  const targetRunFunction = Object.entries(testedFunction)[0][1];
  const startTime = performance.now();
  const result = targetRunFunction.apply(this, [...test.input]);
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
