/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  var res = []
  for (let i = 0; i < nums.length; i++) {
    var absN = Math.abs(nums[i]) - 1
    if (nums[absN] < 0) res.push(Math.abs(nums[i]))
    else nums[absN] = -nums[absN]
  }
  var s
  nums.forEach((i, idx) => (s = i > 0 ? idx + 1 : s))
  return res.concat(s)
}
