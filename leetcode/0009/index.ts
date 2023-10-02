/**
 * LeetCode Palindrome Number problem https://leetcode.com/problems/palindrome-number/description/
 * Mike Orozco (notmike101)
 */

function isPalindrome(x: number): boolean {
  const numberString = x.toString();
  const numberStringHalfLength = numberString.length / 2;
  let indexLeft = 0;
  let indexRight = numberString.length - 1;

  while (indexLeft < numberStringHalfLength) {
    if (numberString[indexLeft++] !== numberString[indexRight--]) {
      return false;
    }
  }

  return true;
}

const main = () => {
  const tests = [
    { input: 1, output: true },
    { input: 10, output: false },
    { input: 11, output: true },
    { input: 121, output: true },
    { input: -121, output: false },
    { input: 12321, output: true },
    { input: 1212, output: false },
    { input: 9007199254740991, output: false },
    { input: 9007199119917009, output: true },
  ];

  for (let testNumber = 0; testNumber < tests.length; ++testNumber) {
    const test = tests[testNumber];
    const startTime = performance.now();
    const result = isPalindrome(test.input);
    const runTime = performance.now() - startTime;

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
