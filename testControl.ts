export interface ITest {
  input: unknown;
  expected: unknown;
  func: Function | Function[];
  identifier?: string;
  testFunc?: (result: any, expected: any) => boolean;
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

  for (const { input, expected, func, identifier, testFunc } of tests) {
    const funcs = (Array.isArray(func) ? func : [func]);

    for (let singleFunction of funcs) {
      const [result, runTime] = captureRuntime(singleFunction, input);
    
      output.push({
        IDENTIFIER: identifier ?? singleFunction.name,
        INPUT: input?.toString(),
        EXPECTED: expected?.toString(),
        RESULT: result?.toString(),
        PASS: testFunc?.(result, expected) ?? result?.toString() === expected?.toString(),
        'RUNTIME (ms)': runTime,
      });
    }
  }

  return output;
};

export default captureTestResults;
