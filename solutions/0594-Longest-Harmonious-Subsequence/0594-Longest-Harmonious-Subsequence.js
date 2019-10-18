/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let temp = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in temp) {
      temp[nums[i]]++
    } else {
      temp[nums[i]] = 1
    }
  }
  let result = 0
  for (let key in temp) {
    if (key - 0 + 1 in temp) {
      result = Math.max(result, temp[key] + temp[key - 0 + 1])
    }
  }
  return result
}
