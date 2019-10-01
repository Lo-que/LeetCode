/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0
  var map = new Map()
  var count = 0
  for (var i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }
  if (k === 0) {
    map.forEach((val, ke) => {
      if (val > 1) count++
    })
  } else {
    map.forEach((val, ke) => {
      if (map.has(ke + k)) count++
    })
  }
  return count
}
