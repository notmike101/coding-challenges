/**
 * LeetCode Add Two Numbers problem: https://leetcode.com/problems/add-two-numbers/
 * Mike Orozco (notmike101) 
 */

import { ListNode } from './ListNode';
import { reverseSwap, createListNodesFromArray, printListNode } from './misc';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  const getListNodeAsNumber = (node: ListNode | null): bigint => {
    if (!node) return 0n;

    let number = '';
    let currentNode: ListNode | null = node;

    do {
      number = currentNode.val + number;
      currentNode = currentNode.next;
    } while (currentNode !== null);

    return BigInt(number);
  };

  const sumArray = reverseSwap((getListNodeAsNumber(l1) + getListNodeAsNumber(l2)).toString().split('')) as string[];
  let sumListNode: ListNode | null = null;

  for (let index = sumArray.length - 1; index >= 0; --index) {
    const node: ListNode = new ListNode(parseInt(sumArray[index]), sumListNode);

    sumListNode = node;
  }

  return sumListNode;
};

const main = () => {
  const l1 = createListNodesFromArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
  const l2 = createListNodesFromArray([5,6,4]);
  const result = addTwoNumbers(l1, l2);

  printListNode(l1);
  printListNode(l2);
  printListNode(result);
};

main();
