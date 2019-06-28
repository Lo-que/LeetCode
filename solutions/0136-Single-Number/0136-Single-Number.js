/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    res ^= nums[i]
  }
  return res
}
console.log(singleNumber([4, 1, 2, 1, 2]))
