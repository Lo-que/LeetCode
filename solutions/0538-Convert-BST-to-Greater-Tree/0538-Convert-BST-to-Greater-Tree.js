/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var prev = 0
  function dfs(root) {
    if (!root) return
    dfs(root.right)
    root.val += prev
    prev = root.val
    dfs(root.left)
  }
  dfs(root)
  return root
}
