import * as testedFunction from '.';

interface Test {
  input: number[];
  output: number[];
}

const tests: Test[] = [
  { input: [3,1,2,4,5], output: [1,2,3,4,5] },
  { input: [5, 4, 3, 2, 1], output: [1,2,3,4,5] },
  { input: [10, 500, 18, 165, 52931, 12538], output: [10, 18, 165, 500, 12538, 52931] },
]

const captureRuntime = (test: Test) => {
  const targetRunFunction = Object.entries(testedFunction)[0][1];
  const startTime = performance.now();
  
  targetRunFunction.apply(this, [test.input]);
  
  const runTime = performance.now() - startTime;
  const result = test.input;

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
