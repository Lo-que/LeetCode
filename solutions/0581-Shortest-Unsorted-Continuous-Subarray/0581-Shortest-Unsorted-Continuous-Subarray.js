/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let high = 0
  let low = 1
  let maxValue
  let minValue
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      maxValue = nums[i]
    } else {
      if (nums[i] < maxValue) {
        high = i
      }
      maxValue = Math.max(maxValue, nums[i])
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      minValue = nums[i]
    } else {
      if (nums[i] > minValue) {
        low = i
      }
      minValue = Math.min(minValue, nums[i])
    }
  }
  return high - low + 1
}
