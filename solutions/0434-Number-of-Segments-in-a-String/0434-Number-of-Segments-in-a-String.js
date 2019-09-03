/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-09-03 22:50:11
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-09-03 22:50:30
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let str = s.trim()
  if (str === '') return 0
  return str.split(/\s+/).length
}
