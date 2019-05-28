/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    var remain = target - nums[i]
    if (map[remain] !== undefined) {
      return [map[remain], i]
    }
    map[nums[i]] = i
  }
}
