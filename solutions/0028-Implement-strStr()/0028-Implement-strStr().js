/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0
  return haystack.indexOf(needle)
}

var strStr_BF = function (haystack, needle) {
  let temp
  let m = haystack.length
  let n = needle.length
  if (!needle) return 0
  for (let i = 0, j = 0; i <= (m - n); i++, j = 0) {
    temp = i
    while (haystack[temp] === needle[j] && j < n) {
      tem++
      j++
    }
    if (j == n) {
      return i
    }
  }
  return -1
}


// to be continued...
