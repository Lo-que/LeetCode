/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let counter = new Int8Array(26)
  for (let i = 0, len = s.length; i < len; i++) {
    counter[s.charAt(i).charCodeAt() - 97]++
    counter[t.charAt(i).charCodeAt() - 97]--
  }
  for (let i = 0; i < 26; i++) {
    if (counter[i] !== 0) return false
  }
  return true
}
console.log(isAnagram('anagram','nagaram'))
