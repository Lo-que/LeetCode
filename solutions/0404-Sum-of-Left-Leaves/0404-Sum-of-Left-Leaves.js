/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-27 23:05:24
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-27 23:11:13
 */
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
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0
    if (root.left === null) return  sumOfLeftLeaves(root.right)
    if (root.left.left === null && root.left.right === null)
        return sumOfLeftLeaves(root.right) + root.left.val
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)

};
