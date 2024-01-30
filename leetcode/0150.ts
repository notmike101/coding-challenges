/**
 * Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 * 
 * Runtime: 53ms - Beats 96.51%
 * Memory:  53.01 Mb - Beats 15.90%
 */

import { captureTestResults, type ITest } from "../testControl.ts";

const ops = ['+', '-', '*', '/'];

const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];
  let token: string,
      op1: number,
      op2: number;

  for (token of tokens) {
    if (ops.includes(token)) {
      op2 = stack.pop()!;
      op1 = stack.pop()!;
      
      if (token === '+') {
        stack.push(op1 + op2);
      } else if (token === '-') {
        stack.push(op1 - op2);
      } else if (token === '*') {
        stack.push(op1 * op2);
      } else if (token === '/') {
        stack.push(Math.trunc(op1 / op2));
      }
    } else {
      stack.push(+token);
    }
  }

  return stack.pop()!;
};

const tests: ITest[] = [
  { input: [['2', '1', '+', '3', '*']], expected: 9, func: evalRPN },
  { input: [['4', '13', '5', '/', '+']], expected: 6, func: evalRPN },
  { input: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22, func: evalRPN },
];

console.table(captureTestResults(tests));