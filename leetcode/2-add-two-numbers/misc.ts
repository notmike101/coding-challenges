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

export const reverseSwap = (array: unknown[]): unknown[] => {
  let tmp: unknown = null;
  const length = array.length;

  for (let first = 0, last = length - 1; first < length / 2; ++first, --last) {
    tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
  }

  return array;
};
