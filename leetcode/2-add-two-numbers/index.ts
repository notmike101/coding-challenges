/**
 * LeetCode Add Two Numbers problem: https://leetcode.com/problems/add-two-numbers/
 * Mike Orozco (notmike101) 
 */

import { ListNode } from './ListNode';
import { createListNodesFromArray, printListNode } from './misc';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  const result: ListNode = new ListNode();
  let currentNode: ListNode | null = result;
  let carry = 0;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    currentNode.val = sum % 10;
    carry = sum > 9 ? 1 : 0;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;

    if (l1 || l2) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  if (carry) {
    currentNode.next = new ListNode(carry);
  }

  return result;
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
