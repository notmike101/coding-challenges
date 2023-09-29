import { ListNode } from './ListNode';

export const createListNodesFromArray = (array: number[]): ListNode | null => {
  let listNode: ListNode | null = null;

  for (let index = array.length - 1; index >= 0; --index) {
    const node: ListNode = new ListNode(array[index], listNode);

    listNode = node;
  }

  return listNode;
};

export const printListNode = (listNode: ListNode | null) => {
  if (!listNode) return;

  let currentNode: ListNode | null = listNode;
  let string = '';

  do {
    string += currentNode?.val + '';
    currentNode = currentNode.next;
  } while (currentNode !== null);

  console.log(string);
}
