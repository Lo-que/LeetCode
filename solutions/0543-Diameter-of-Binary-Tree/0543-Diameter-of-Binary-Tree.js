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
var diameterOfBinaryTree = function(root) {
  let d = 0
  const dfs = node => {
    if (!node) return -1
    const left = dfs(node.left) + 1
    const right = dfs(node.right) + 1
    d = Math.max(left + right, d)
    return Math.max(left, right)
  }

  dfs(root)

  return d
}
