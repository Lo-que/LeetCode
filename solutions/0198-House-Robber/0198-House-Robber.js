/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prep = 0
  let cur = 0
  for(let i = 0, len = nums.length; i < len; i++) {
    let temp = cur
    cur = Math.max(prep + nums[i], cur)
    prep = temp
  }
  return cur
}
console.log(rob([2, 7, 9, 3, 1]))
