/**
 * LeetCode Palindrome Number problem https://leetcode.com/problems/palindrome-number/description/
 * Mike Orozco (notmike101)
 */

function isPalindrome(x: number): boolean {
  const numberString = x.toString();
  const numberStringLength = numberString.length;
  const numberStringHalfLength = numberStringLength / 2;
  let isPalindrome = true;
  let indexLeft = 0;
  let indexRight = numberString.length - 1;

  while (indexLeft < numberStringHalfLength) {
    const numberPlaceLeft = numberString[indexLeft++];
    const numberPlaceRight = numberString[indexRight--];

    if (numberPlaceLeft !== numberPlaceRight) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

function isPalindrome_new(x: number): boolean {
  const numberString = x.toString();
  const reversedString = [...numberString].reverse().join('');

  return numberString === reversedString;
}

const main = () => {
  const tests = [
    { input: 121, output: true },
    { input: -121, output: false },
    { input: 10, output: false },
    { input: 12321, output: true },
    { input: 1212, output: false },
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
