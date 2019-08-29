/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-29 22:26:42
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-29 22:57:26
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let set = new Set()
  let count = 0
  for (var i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      count += 2
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }
  return set.size > 0 ? count + 1 : count
}
