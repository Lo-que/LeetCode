/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-23 22:53:43
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-23 23:25:32
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const sObj = {}
  for (let i = 0; i < s.length; i++) {
    if (sObj[s[i]] >= -1) sObj[s[i]] = -1
    else sObj[s[i]] = i
  }
  for (let i in sObj) {
    if (sObj[i] >= 0) return sObj[i]
  }
  return -1
}
