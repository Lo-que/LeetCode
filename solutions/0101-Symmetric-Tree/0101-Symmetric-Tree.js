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
var root = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: null,
      left: null
    },
    left: {
      val: 4,
      right: null,
      left: null
    }
  },
  left: {
    val: 2,
    right: {
      val: 4,
      right: null,
      left: null
    },
    left: {
      val: 3,
      right: null,
      left: null
    }
  }
}
console.log(isSymmetric(root))
