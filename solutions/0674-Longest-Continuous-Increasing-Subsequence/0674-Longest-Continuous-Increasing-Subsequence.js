/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let max = 0
  let len = nums.length
  let count = 1
  for (let i = 0; i < len; i++) {
    if (nums[i] < nums[i + 1]) {
      count++
    } else {
      max = Math.max(max, count)
      count = 1
    }
  }
  return max
}
