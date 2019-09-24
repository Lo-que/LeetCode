/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num == 0) return '0'
  var str = ''
  var radix = 7
  var isPositiveNum = true
  if (num < 0) {
    num = -num
    isPositiveNum = false
  }
  while (num / radix !== 0) {
    str = (num % radix) + str
    num = (num / radix) >> 0
  }
  return isPositiveNum ? str : '-' + str
}
