/**
 * LeetCode Remove Dupliates From Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 71ms    - Beats 28.40% 
 * Memory:  44.83MB - Beats 64.73% 
 */

import captureTestResults, { type ITest } from "../testControl"

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  let current = head;

  while (current !== null) {
    if (current.next !== null && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// No tests
