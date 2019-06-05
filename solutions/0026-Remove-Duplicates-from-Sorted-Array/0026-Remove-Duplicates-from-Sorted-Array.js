/**
 * @param {number[]} nums
 * @return {number}
 */
//双指针法
var removeDuplicates = function (nums) {
  if (!nums.length) return 0
  let j = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i]
    }
  }
  return j + 1
}
