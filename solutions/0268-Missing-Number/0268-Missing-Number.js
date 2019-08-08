/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0
  for (let i = 1, length = nums.length; i <= length; i++) {
    result += i - nums[i - 1]
  }
  return result
}
