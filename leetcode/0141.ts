/**
 * Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/description/
 * 
 * Runtime: 62ms - Beats 88.35%
 * Memory: 55.24 - Beats 5.09%
 */
import { captureTestResults, type ITest } from "../testControl.ts";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const hasCycle = (head: ListNode | null): boolean => {
  if (!head) return false;
  if (!head.next) return false;

  const hitNodes = new Set<ListNode>();
  let currentNode: ListNode | null = head;

  while (currentNode) {
    if (hitNodes.has(currentNode)) return true;

    hitNodes.add(currentNode);

    currentNode = currentNode.next;
  }

  return false;
};

const tests: ITest[] = [
  {
    input: [(() => {
      const head = new ListNode(3);
      const second = new ListNode(2);
      const third = new ListNode(0);
      const fourth = new ListNode(4);
      
      head.next = second;
      second.next = third;
      third.next = fourth;
      fourth.next = second;

      return head;
    })()],
    expected: true,
    func: hasCycle,
  },
  {
    input: [(() => {
      const head = new ListNode(1);
      const second = new ListNode(2);

      head.next = second;
      second.next = head;

      return head;
    })()],
    expected: true,
    func: hasCycle,
  },
  {
    input: [new ListNode(1)],
    expected: false,
    func: hasCycle,
  }
];

console.table(captureTestResults(tests));