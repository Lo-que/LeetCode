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
var getMinimumDifference = function(root) {
  var z = null,
    result
  function ldr(node) {
    if (node === null) {
      return
    }
    ldr(node.left)
    result =
      z === null
        ? undefined
        : result == undefined
        ? node.val - z
        : Math.min(result, node.val - z)
    z = node.val
    ldr(node.right)
  }
  ldr(root)
  return result
}
