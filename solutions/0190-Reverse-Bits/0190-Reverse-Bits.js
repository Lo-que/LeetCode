/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let i = 32
  let res = 0
  while (i--) {
    res <<= 1
    res += n & 1
    n >>>= 1
  }
  return res >>> 0
}
