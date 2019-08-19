/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-19 22:25:11
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-19 22:27:35
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let i = 1
  while (num > 0) {
    num -= i
    i += 2
  }
  return num === 0
}
