/**
 * @param {number} x
 * @return {boolean}
 * 因为javascript 不存在取整/ 所以pos临时存储余数
 */
var isPalindromeAsAll = function (x) {
  let rev = 0,
    pos = 0,
    xx = x
  if (x < 0 || (x % 10 == 0 && x != 0)) return false
  // if(x >=0 && x < 10) return true
  while (xx != 0) {
    pos = xx % 10
    xx = (xx - pos) / 10
    rev = rev * 10 + pos
  }
  return x === rev
}


var isPalindromeAsHalf = function (x) {
  let rev = 0, //反转整数
    pos = 0

  if (x < 0 || (x % 10 == 0 && x != 0)) return false
  // if(x >=0 && x < 10) return true
  while (x > rev) {
    pos = x % 10
    x = (x - pos) / 10
    rev = rev * 10 + pos
  }
  return x === rev || x === ((rev - rev % 10) / 10)
}
