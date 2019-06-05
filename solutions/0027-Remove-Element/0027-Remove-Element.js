/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) return 0
  let j = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== val)
      nums[j++] = nums[i]
  }
  return j
}


var removeElement = function (nums, val) {
  if (!nums.length) return 0
  let i = 0,
    n = nums.length
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]
      n--
    } else {
      i++
    }
  }
  return n
}
