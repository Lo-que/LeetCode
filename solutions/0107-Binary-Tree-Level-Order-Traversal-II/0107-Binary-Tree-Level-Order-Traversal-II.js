/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = []
  let list = []
  if (!root) return res
  list.push(root)
  while (list.length !== 0) {
    let temp = []
    for (let i = 0, len = list.length; i < len; i++) {
      let head = list.shift()
      temp.push(head.val)
      if (head.left) list.push(head.left)
      if (head.right) list.push(head.right)
    }
    res.unshift(temp)
  }
  return res
}
