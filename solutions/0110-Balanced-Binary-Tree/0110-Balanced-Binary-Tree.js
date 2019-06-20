/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true
  const depth = (root) => {
    if (!root) return 0
    return Math.max(depth(root.left), depth(root.right)) + 1
  }
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

const isBalanced = (root) => {
  const depth = (root) => {
    if (!root) return 0
    let left = depth(root.left)
    let right = depth(root.right)
    if (left === -1 || right === -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }
  return depth(root) !== 1
}
