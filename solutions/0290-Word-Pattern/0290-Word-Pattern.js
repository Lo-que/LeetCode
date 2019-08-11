/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-11 22:27:12
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-11 23:47:40
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const words = str.split(' ')
  if (words.length !== pattern.length) return false

  const map = {}
  const set = {}

  for (let i = 0, len = words.length; i < len; i++) {
    const letter = pattern[i]
    const word = words[i]
    if (
      (letter in map && map[letter] !== word) ||
      (word in set && set[word] !== letter)
    ) {
      return false
    } else {
      map[letter] = word
      set[word] = letter
    }
  }
  return true
}
