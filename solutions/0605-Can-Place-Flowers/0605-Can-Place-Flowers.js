/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let temp = [0, ...flowerbed, 0]
  for (let i = 0, len = temp.length; i < len; i++) {
    if (temp[i - 1] === 0 && temp[i] === 0 && temp[i + 1] === 0) {
      temp[i] = 1
      n -= 1
    }
  }
  return n <= 0
}
