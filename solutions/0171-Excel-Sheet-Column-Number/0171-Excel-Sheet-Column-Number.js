/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0
  for (let i = 0, len = s.length; i < len; i++) {
    let temp = s[i].charCodeAt() - 64
    res = res * 26 + temp
  }
  return res
}

console.log(titleToNumber('A'))
