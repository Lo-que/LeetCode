/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-23 22:53:43
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-24 12:49:44
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] >= -1) obj[s[i]] = -1
    else obj[s[i]] = i
  }
  for (let i in obj) {
    if (obj[i] >= 0) return obj[i]
  }
  return -1
}
