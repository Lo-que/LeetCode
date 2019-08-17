/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-17 22:58:40
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-17 23:02:43
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(item => nums2.includes(item)))]
}
