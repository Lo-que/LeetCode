/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1])
  }
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) res.push(i + 1)
  }
  return res
}
