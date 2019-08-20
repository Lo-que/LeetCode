/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-20 23:42:20
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-20 23:42:20
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1)
}
