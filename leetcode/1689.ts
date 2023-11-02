/**
 * LeetCode Partitioning Into Minimum Number Of Deci-Binary Numbers
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 65ms     - Beats 83.06%
 * Memory:  47.03 MB - Beats 55.64%
 */

import captureTestResults, { type ITest } from "../testControl"

const minPartitions = (n: string): number => {
  let largestNumber = +n[0];

  if (largestNumber === 9) return largestNumber;
  
  let i = n.length - 1;

  while (i > 0 && largestNumber !== 9) {
  	const num = +n[i--];
  	
  	largestNumber = largestNumber > num ? largestNumber : num;
  }

  return largestNumber;
};

const tests: ITest[] = [
  { input: '32', expected: 3, func: minPartitions },
  { input: '82734', expected: 8, func: minPartitions },
  { input: '27346209830709182346', expected: 9, func: minPartitions },
  { input: '719925474099190071992547409919007199254740991', expected: 9, func: minPartitions },
];

console.table(captureTestResults(tests));
