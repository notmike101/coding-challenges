/**
 * Nested Array Generator
 * https://leetcode.com/problems/nested-array-generator/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 671ms - Beats 8.73%
 * Memory:  191.99 MB - Beats 5.55%
 */

type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  function* internalTraverse(element: MultidimensionalArray | number) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        yield* inorderTraversal(subElement as MultidimensionalArray);
      }
    } else {
      yield element;
    }
  }

  yield* internalTraverse(arr);
};

const test0 = () => {
  const gen = inorderTraversal([1, [2, 3]]);
  let current = gen.next().value;

  console.assert(current === 1, `Failed, expected 1, got ${current}`);
  current = gen.next().value;
  console.assert(current === 2, `Failed, expected 2, got ${current}`);
  current = gen.next().value;
  console.assert(current === 3, `Failed, expected 3, got ${current}`);
}

const test1 = () => {
  const gen = inorderTraversal([[[6]], [1,3],[]]);
  let current = gen.next().value;

  console.assert(current === 6, `Failed, expected 6, got ${current}`);
  current = gen.next().value;
  console.assert(current === 1, `Failed, expected 1, got ${current}`);
  current = gen.next().value;
  console.assert(current === 3, `Failed, expected 3, got ${current}`);
};

test0();
test1();
