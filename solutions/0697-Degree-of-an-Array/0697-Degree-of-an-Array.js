/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  if (nums.length < 2) return nums.length
  let obj = {}
  let max = { key: null, val: 0, len: 0 }
  for (let i = 0, len = nums.length; i < len; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]].push(i)
      let len = obj[nums[i]].length
      if (
        len > max.val ||
        (len == max.val && i - obj[nums[i]][0] + 1 < max.len)
      ) {
        max = {
          key: nums[i],
          val: len,
          len: i - obj[nums[i]][0] + 1
        }
      }
    } else {
      obj[nums[i]] = [i]
    }
  }
  if (max.key == null) return 1
  return max.len
}
