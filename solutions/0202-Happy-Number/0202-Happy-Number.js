/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let list = []
  while (n !== 1) {
    let temp = 0
    if (list.indexOf(n) > -1) {
      return false
    } else {
      list.push(n)
    }
    while (n != 0) {
      temp += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }
    n = temp
  }
  return true
}
