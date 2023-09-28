/**
 * LeetCode Add Two Numbers problem: https://leetcode.com/problems/add-two-numbers/
 * Mike Orozco (notmike101) 
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

  const getListNodeAsNumber = (node: ListNode | null): number => {
    if (!node) return 0;

    let number = '';
    let currentNode: ListNode | null = node;

    do {
      if (node === null) break;

      number = node.val + number;
      node = node.next;

    } while(currentNode !== null);

    return parseInt(number);
  };

  const l1Number = getListNodeAsNumber(l1);
  const l2Number = getListNodeAsNumber(l2);
  const sum = l1Number + l2Number;

  let sumString = sum.toString();
  let sumArray = sumString.split('').reverse();
  let sumListNode: ListNode | null = null;

  for (let index = sumArray.length - 1; index >= 0; --index) {
    const node: ListNode = new ListNode(parseInt(sumArray[index]), sumListNode);

    sumListNode = node;
  }

  return sumListNode;
};

const main = () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  const result = addTwoNumbers(l1, l2);

  console.log(result);
};

main();