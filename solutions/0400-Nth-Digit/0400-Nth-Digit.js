/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-25 23:21:08
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-25 23:29:46
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n < 10) return n
  let length = 0,
    cnt = 9,
    i = 1
  for (; length + cnt * i < n; i++) {
    length += cnt * i
    cnt *= 10
  }
  let num = Math.pow(10, i - 1) - 1 + (n - length + 1) / i
  let index = (n - length - 1) % i

  return String(num)[index] - '0'
}
