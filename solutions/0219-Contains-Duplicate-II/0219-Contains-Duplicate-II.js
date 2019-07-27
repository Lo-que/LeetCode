/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(nums[i])) return Math.abs(map.get(nums[i]) - i) <= k
    map.set(nums[i], i)
    if (map.size > k) map.delete(nums[i - k])
  }
  return false
}
