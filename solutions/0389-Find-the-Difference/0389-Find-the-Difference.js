/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-24 21:51:59
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-24 21:52:18
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let res = 0,
    len = s.length

  for (let i = 0; i < len; i++) {
    res += t[i].charCodeAt() - s[i].charCodeAt()
  }

  res += t[len].charCodeAt()

  return String.fromCharCode(res)
}
