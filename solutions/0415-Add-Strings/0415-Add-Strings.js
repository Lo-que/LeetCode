/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-09-01 23:10:41
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-09-01 23:10:41
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = ''
  let i = num1.length - 1,
    j = num2.length - 1,
    carry = 0
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1[i] | 0 : 0
    let n2 = j >= 0 ? num2[j] | 0 : 0
    let temp = n1 + n2 + carry
    res = (temp % 10) + res
    carry = (temp / 10) | 0
    i--
    j--
  }
  return carry > 0 ? carry + res : res
}
