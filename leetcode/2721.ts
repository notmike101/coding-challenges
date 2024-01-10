/**
 * Execute Asynchronous Functions in Parallel
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 76ms - Beats 49.12%
 * Memory:  43.92 MB - Beats 5.95%
 */

type Fn<T> = () => Promise<T>

const promiseAll = <T>(functions: Fn<T>[]): Promise<T[]> => {
  const resolved: any[] = new Array(functions.length);
  const maxFunctionsIndex = functions.length;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < maxFunctionsIndex; ++i) {
      functions[i]()
        .then((res) => {
          resolved[i] = res;
          let isComplete = true;

          for (let j = resolved.length - 1; j >= 0; --j) {
            if (resolved[j] === undefined) {
              isComplete = false;
              break;
            }
          }

          if (isComplete) {
            return resolve(resolved);
          }
        })
        .catch((err) => {
          return reject(err);
        })
    }
  });
};

const test0 = async () => {
  const res = await promiseAll([() => new Promise(res => res(42))]);

  console.assert(res[0] === 42, `Expected [42], got ${res}`);
};

test0();
