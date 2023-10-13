/**
 * LeetCode Merge Two Sorted Lists problem: https://leetcode.com/problems/merge-two-sorted-lists/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 63ms - Beats 58.91%
 * Memory: 45.04 MB - Beats 35.97%
 */

import { ListNode } from './ListNode';

const arrayFromListNodes = (input: ListNode | null) => {
  if (!input) return [];

  const output: number[] = [];
  let currentNode: ListNode | null = input;

  while (currentNode !== null) {
    output.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return output;
};

const listNodesFromArray = (input: number[]) => {
  if (input.length === 0) return null;

  const listHead = new ListNode(input[0]);
  let currentNode = listHead;

  for (let i = 0; i < input.length; ++i) {
    currentNode.val = input[i];

    if (input[i + 1] !== undefined) {
      currentNode.next = new ListNode(input[i + 1]);
      currentNode = currentNode.next;
    }
  }

  return listHead;
};

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  const list1Array = arrayFromListNodes(list1);
  const list2Array = arrayFromListNodes(list2);

  const sortedList = list1Array.concat(list2Array).sort((a, b) => {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
  });

  return listNodesFromArray(sortedList);
};
