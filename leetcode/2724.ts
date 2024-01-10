/**
 * Sort By
 * https://leetcode.com/problems/sort-by/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 127ms - Beats 76.09%
 * Memory:  57.30 MB - Beats 33.88%
 * 
 * Note: Ignore type errors, using type from leetcode, which isn't right...  
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

const sortBy = (arr: JSONValue[], fn: Fn): JSONValue[] => arr.sort((a, b) => fn(a) - fn(b));

const test0 = () => {
  const output = sortBy([5,4,1,2,3], (x) => x);

  console.assert(output[0] === 1 && output[4] === 5, `Expected [1,2,3,4,5], got ${output}`);
};

test0();
