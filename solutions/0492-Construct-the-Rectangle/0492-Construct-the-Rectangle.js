/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  //寻找一个数的两个最相邻的因数
  var sqrt = Math.sqrt(area) >> 0
  for (var i = sqrt; i >= 1; i--) {
    if (area % i === 0) {
      return [area / i, i]
    }
  }
}
