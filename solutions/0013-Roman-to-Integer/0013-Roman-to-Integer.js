/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const D = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  let res = 0
  s = s.split('')
  let len = s.length
  for (let i = 0; i < len - 1; i++) {
    res = D[s[i]] < D[s[i + 1]] ? res - D[s[i]] : res + D[s[i]]
  }
  return res += D[s[len - 1]]
}
