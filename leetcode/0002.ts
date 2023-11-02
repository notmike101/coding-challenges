/**
 * LeetCode Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 87ms    - Beats 88.48%
 * Memory:  48.51MB - Beats 32.01%
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

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
