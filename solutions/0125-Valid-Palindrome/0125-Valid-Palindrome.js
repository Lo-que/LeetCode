/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase()
  let i = 0
  let j = s.length - 1
  while (i < j) {
    while (i < j && !isLetterOrDigit(s.charAt(i))) i++;
    while (i < j && !isLetterOrDigit(s.charAt(j))) j--;
    if (s.charAt(i) !== s.charAt(j)) return false
    i++;
    j--;
  }
  return true
}

const isLetterOrDigit = (c) => {
  return /[A-Za-z0-9]/.test(c)
}
console.log(isPalindrome('race a car'))
