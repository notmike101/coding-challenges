import * as testedFunction from '.';

interface Test {
  input: string[];
  output: string;
}

const tests: Test[] = [
  { input: ['flower', 'flow', 'flight'], output: 'fl' },
  { input: ['dog', 'racecar', 'car'], output: '' },
]

const captureRuntime = (test: Test) => {
  const targetRunFunction = Object.entries(testedFunction)[0][1];
  const startTime = performance.now();
  const result = targetRunFunction.apply(this, [test.input]);
  const runTime = performance.now() - startTime;

  return { result, runTime };
}

const main = () => {
  for (let testNumber = 0; testNumber < tests.length; ++testNumber) {
    const test = tests[testNumber];
    const { result, runTime } = captureRuntime(test);

    console.log(
`Test ${testNumber + 1}: ${result === test.output ? 'PASS' : 'FAIL'}
Runtime: ${runTime}s
Input: ${test.input}
Output: ${result}
Expected: ${test.output}
`
          );
  }
};

main();
