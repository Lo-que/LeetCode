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
var isSymmetric = function (root) {
  if (!root) return true
  return isEqual(root.left, root.right)
}
var isEqual = function (left, right) {
  if (!left && !right) return true
  if (!left || !right) return false
  return (left.val === right.val) && isEqual(left.left, right.right) && isEqual(left.right, right.left)
}

var isSymmetric = function (root) {
  if (!root) return true
  let nodeList = []
  nodeList.push(root.left)
  nodeList.push(root.right)
  while (nodeList.length > 0) {
    let left = nodeList.shift()
    let right = nodeList.shift()
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false
    nodeList.push(left.left, right.right)
    nodeList.push(left.right, right.left)
  }
  return true
}
