/**
 * LeetCode Partitioning Into Minimum Number Of Deci-Binary Numbers problem: https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 * Mike Orozco (notmike101) 
 */

const tests = [
  { input: '32', output: 3 },
  { input: '82734', output: 8 },
  { input: '27346209830709182346', output: 9 },
  { input: '719925474099190071992547409919007199254740991', output: 9 },
];

function minPartitions(n: string): number {
  let largestNumber = +n[0];

  if (largestNumber === 9) return largestNumber;
  
  let i = n.length - 1;

  while (i > 0 && largestNumber !== 9) {
  	const num = +n[i--];
  	
  	largestNumber = largestNumber > num ? largestNumber : num;
  }

  return largestNumber;
}

const main = () => {
  for (let testNumber = 0; testNumber < tests.length; ++testNumber) {
    const test = tests[testNumber];
    const startTime = performance.now();
    const result = minPartitions(test.input);
    const endTime = performance.now();

    console.log(`Test ${testNumber + 1}: ${result === test.output ? 'PASS' : 'FAIL'}\nRuntime: ${(endTime - startTime).toFixed(4)}ms\nInput: ${test.input}\nOutput: ${result}\nExpected: ${test.output}\n`);
  }
};

main();
