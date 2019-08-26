/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-26 22:04:24
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-26 22:13:58
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  let res = []
  const count1 = n => {
    let res = 0
    while (n !== 0) {
      n = n & (n - 1)
      res++
    }
    return res
  }

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count1(i) + count1(j) === num) {
        let str = i + ':' + (j < 10 ? '0' + j : j)
        res.push(str)
      }
    }
  }

  return res
}

readBinaryWatch(0)
