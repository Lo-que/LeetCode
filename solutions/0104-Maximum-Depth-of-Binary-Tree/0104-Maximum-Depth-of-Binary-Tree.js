/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return ((left > right ? left : right) + 1)
}
