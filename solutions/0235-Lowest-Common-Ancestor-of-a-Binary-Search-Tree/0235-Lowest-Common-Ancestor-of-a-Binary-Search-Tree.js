/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let temp = root
  if (p.val > q.val) {
    ;[p, q] = [q, p]
  }
  while (true) {
    if ((temp.val > p.val && temp.val <= q.val) || (temp === p || temp === q)) {
      return temp
    } else if (temp.val < p.val && temp.val < q.val) {
      temp = temp.right
    } else {
      temp = temp.left
    }
  }
}
