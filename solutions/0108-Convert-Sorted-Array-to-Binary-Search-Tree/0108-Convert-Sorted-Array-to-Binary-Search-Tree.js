/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (left, right) => {
    if (left > right) return null
    // console.log(`${left}${right}`,(right-left)/2 )
    let middle = left + Math.floor((right - left) / 2)
    let root = new TreeNode(nums[middle])
    root.left = buildTree(left, middle - 1)
    root.right = buildTree(middle + 1, right)
    return root
  }
  return buildTree(0, nums.length - 1)
}
