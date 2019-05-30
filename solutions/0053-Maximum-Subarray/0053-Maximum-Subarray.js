/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = 0
  nums.map((num) => {
    sum = sum > 0 ? sum + num : num
    res = Math.max(res, sum)
  })
  return res
}
