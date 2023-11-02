export interface ITest {
  input: any;
  expected: any;
  func: Function;
  identifier?: string;
}

export const captureRuntime = (func: Function, input: unknown): [number, number] => {
  const startTime = performance.now();
  let result;

  if (typeof input === "object") {
    result = func.apply(this, input);
  } else {
    result = func.call(this, input);
  }

  const runTime = performance.now() - startTime;

  return [result, runTime];
};

export const captureTestResults = (tests: ITest[]) => {
  const output: {[key: string]: any} = [];

  for (const { input, expected, func, identifier } of tests) {
    const [result, runTime] = captureRuntime(func, input);
  
    output.push({
      IDENTIFIER: identifier ?? func.name,
      INPUT: input.toString(),
      EXPECTED: expected.toString(),
      RESULT: result.toString(),
      PASS: result.toString() === expected.toString(),
      'RUNTIME (ms)': runTime,
    });
  }

  return output;
};

export default captureTestResults;
