/**
 * @param {number} x
 * @return {boolean}
 * 因为javascript 不存在取整/ 所以pos临时存储余数
 */
var isPalindromeAsAll = function (x) {
  let rev = 0,
    pos = 0,
    temp = x
  if (x < 0 || (x % 10 == 0 && x != 0)) return false
  // if(x >=0 && x < 10) return true
    while (temp != 0) {
      pos = temp % 10
      temp = (temp - pos) / 10
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
