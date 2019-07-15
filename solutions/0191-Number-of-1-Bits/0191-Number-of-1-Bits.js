/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0
  let temp = 1
  for (let i = 0; i < 32; i++) {
    if ((n & temp) !== 0) res++
    temp <<= 1
  }
  return res
}

var hammingWeight = function(n) {
  let res = 0
  while (n !== 0) {
    res++
    n &= n - 1
  }
  return res
}
