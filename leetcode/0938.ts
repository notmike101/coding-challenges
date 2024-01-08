/**
 * Range Sum of BST
 * https://leetcode.com/problems/range-sum-of-bst/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 132ms - Beats 43.50%
 * Memory:  98.14 MB - Beats 9.87%
 */

class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
  let sum = 0;

  if (!root) return sum;

  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  sum += rangeSumBST(root.left, low, high);
  sum += rangeSumBST(root.right, low, high);

  return sum;
};

const test1 = () => {
  const tree = new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15, null, new TreeNode(18)));
  const output = rangeSumBST(tree, 7, 15);

  console.assert(output === 32, 'Test1 failed');
}

const test2 = () => {
  const tree = new TreeNode(10, new TreeNode(5, new TreeNode(3, new TreeNode(1)), new TreeNode(7, new TreeNode(6))), new TreeNode(15,new TreeNode(13), new TreeNode(18)));
  const output = rangeSumBST(tree, 6, 10);

  console.assert(output === 23, 'Test2 failed');
};

test1();
test2();