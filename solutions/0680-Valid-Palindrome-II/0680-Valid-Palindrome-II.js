/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, count = 0) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] === s[j]) continue
    if (count > 0) return false
    return (
      validPalindrome(s.slice(i, j), count + 1) ||
      validPalindrome(s.slice(i + 1, j + 1), count + 1)
    )
  }
  return true
}
var isPalindrome = function(s, i = 0, j = s.length - 1) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

var validPalindrome = function(s) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
    }
    i++
    j--
  }
  return true
}
