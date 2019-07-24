/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  for (let i = 0, len = s.length; i < len; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
  }
  return true
}
console.log(isIsomorphic('foo', 'bar'))
