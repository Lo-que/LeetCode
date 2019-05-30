/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverse = 0
  let pos = 0
  while (x != 0) {
    pos = x % 10
    x = (x - pos) / 10
    reverse = reverse * 10 + pos
  }
  if (reverse > 0x7fffffff || reverse < Math.pow(-2, 31)) return 0
  return reverse
}
