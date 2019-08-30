/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-30 23:04:52
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-30 23:05:10
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var res = []
  var temp = ''
  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      if (i % 3 == 0) {
        temp += 'Fizz'
      }
      if (i % 5 == 0) {
        temp += 'Buzz'
      }
      res.push(temp)
      temp = ''
      continue
    }

    res.push(temp + i)
  }
  return res
}
