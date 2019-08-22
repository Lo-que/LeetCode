/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-22 22:48:31
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-22 22:49:32
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let value of ransomNote) {
    let index = magazine.indexOf(value)
    if (index > -1) {
      magazine =
        magazine.substring(0, index) +
        magazine.substring(index + 1, magazine.length)
    } else {
      return false
    }
  }
  return true
}
