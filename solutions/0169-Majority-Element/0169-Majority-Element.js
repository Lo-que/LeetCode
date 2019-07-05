/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let res = nums[0]
  let count = 0
  for(num of nums) {
    if(count === 0) res = num
    count += res === num ? 1 : -1
  }
  return res
}
