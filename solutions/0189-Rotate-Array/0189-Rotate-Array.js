/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length < 2 || k === 0) return
  const cut = nums.splice(nums.length - k, k)
  nums.unshift(...cut)
}
