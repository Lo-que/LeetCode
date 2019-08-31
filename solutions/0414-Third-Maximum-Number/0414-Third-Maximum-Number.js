/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-31 23:08:00
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-31 23:21:43
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let len = nums.length

  let one = nums[0]
  let two = -Infinity
  let three = -Infinity

  for (let i = 1; i < len; i++) {
    let now = nums[i]
    if (now === one || now === two || now === three) continue
    if (now > one) {
      three = two
      two = one
      one = now
    } else if (now > two) {
      three = two
      two = now
    } else if (now > three) {
      three = now
    }
  }

  if (three == -Infinity) return one
  return three
}
