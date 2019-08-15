/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-15 20:55:22
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-15 20:55:45
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return (num & (num - 1)) === 0 && num % 3 == 1
}
