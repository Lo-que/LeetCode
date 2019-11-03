/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, target) {
  if (!root) return false

  let nums = []
  function inOrder(root) {
    if (!root) {
      return
    }
    inOrder(root.left)
    nums.push(root.val)
    inOrder(root.right)
  }
  inOrder(root)
  const arrMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i]
    if (arrMap.has(result)) {
      return true
    }
    arrMap.set(nums[i], i)
  }
  return false
}
