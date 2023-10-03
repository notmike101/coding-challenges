import { romanToInt } from '.';

const tests = [
  { input: 'III', output: 3 },
  { input: 'LVIII', output: 58 },
  { input: 'MCMXCIV', output: 1994 },
]

const captureRuntime = (run: any, props: any[]) => {
  console.log(props);
  const startTime = performance.now();
  const result = run.apply(this, props);
  const runTime = performance.now() - startTime;

  return { result, runTime };
}

const main = () => {
  for (let testNumber = 0; testNumber < tests.length; ++testNumber) {
    const test = tests[testNumber];
    const { result, runTime } = captureRuntime(romanToInt, [test.input]);

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
