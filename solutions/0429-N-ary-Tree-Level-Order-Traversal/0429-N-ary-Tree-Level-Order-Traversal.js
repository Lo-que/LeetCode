/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-09-02 20:01:38
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-09-02 23:12:29
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let nums = []
  const search = (nums, node, k) => {
    if (node == null) {
      return
    }
    if (nums[k] == undefined) {
      nums[k] = []
    }
    nums[k].push(node.val)
    for (var i = 0; i < node.children.length; i++) {
      search(nums, node.children[i], k + 1)
    }
  }
  search(nums, root, 0)
  return nums
}
