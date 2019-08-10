/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-10 23:14:30
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-10 23:16:37
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0, j = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      let k = j++
      ;[nums[k], nums[i]] = [nums[i], nums[k]]
    }
  }
}
