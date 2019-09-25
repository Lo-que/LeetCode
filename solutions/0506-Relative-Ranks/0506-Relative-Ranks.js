/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var res = [...nums]
  nums.sort((a, b) => b - a)
  var object = {}
  for (var i = 0; i < nums.length; i++) {
    object[nums[i]] = i
  }
  for (var i = 0; i < nums.length; i++) {
    if (object[res[i]] == 0) {
      res[i] = 'Gold Medal'
      continue
    }
    if (object[res[i]] == 1) {
      res[i] = 'Silver Medal'
      continue
    }
    if (object[res[i]] == 2) {
      res[i] = 'Bronze Medal'
      continue
    }
    res[i] = (object[res[i]] + 1).toString()
  }
  return res
}
