/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var res = 0,
    i = 0
  var temp = []
  while (i < s.length) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i])
    } else {
      temp.shift()
      continue
    }
    res = Math.max(res, temp.length)
    i++
  }
  return res
}
