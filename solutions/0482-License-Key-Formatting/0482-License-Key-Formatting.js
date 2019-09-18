/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  var str = S.split('-').join('')
  if (str.length <= K) {
    return str.replace(/([a-z])/g, function(m, $1) {
      return $1.toUpperCase()
    })
  }
  if (K === 1) {
    return str
      .replace(/([a-z])/g, function(m, $1) {
        return $1.toUpperCase()
      })
      .split('')
      .join('-')
  }
  var res = ''
  for (var i = str.length; i > 0; i -= K) {
    if (i === str.length) {
      res = str.substring(i - K, i)
    } else {
      res = str.substring(i - K, i) + '-' + res
    }
  }
  return res.replace(/([a-z])/g, function(m, $1) {
    return $1.toUpperCase()
  })
}
