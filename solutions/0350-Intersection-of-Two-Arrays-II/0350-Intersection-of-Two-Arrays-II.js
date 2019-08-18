/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-18 23:37:11
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-18 23:37:40
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = []
  nums1.forEach((v, i) => {
    let index = nums2.indexOf(v)
    if (index > -1) {
      res.push(v)
      nums2.splice(index, 1)
    }
  })
  return res
}
