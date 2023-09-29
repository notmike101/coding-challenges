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

const reverseSwap = (array: unknown[]) => {
  let tmp: unknown = null;
  const length = array.length;

  for (let first = 0, last = length - 1; first < length / 2; ++first, --last) {
    tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
  }
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  const getListNodeAsNumber = (node: ListNode | null): number => {
    if (!node) return 0;

    let number = '';
    let currentNode: ListNode | null = node;

    do {
      number = currentNode.val + number;
      currentNode = currentNode.next;
    } while (currentNode !== null);

    return parseInt(number);
  };

  const l1Number = getListNodeAsNumber(l1);
  const l2Number = getListNodeAsNumber(l2);
  const sum = l1Number + l2Number;
  const sumArray = sum.toString().split('').reverse();
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