/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) return ''
  n--
  return (
    convertToTitle((n - (n % 26)) / 26) + String.fromCharCode((n % 26) + 65)
  )
}
console.log(convertToTitle(1))
