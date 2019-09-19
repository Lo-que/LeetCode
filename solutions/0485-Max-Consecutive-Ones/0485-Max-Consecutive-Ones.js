/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0
  let slow = 0
  let fast = 0
  let end = nums.length

  while (slow < end) {
    fast = slow
    let count = 0
    while (fast < end && nums[fast++] === 1) {
      count++
    }
    max = Math.max(max, count)
    slow = fast
  }
  return max
}
