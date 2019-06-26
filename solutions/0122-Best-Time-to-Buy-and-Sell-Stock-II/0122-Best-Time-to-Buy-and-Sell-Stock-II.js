/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let diff = 0
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    diff = prices[i + 1] - prices[i]
    if (diff > 0) res += diff
  }
  return res
}

// 去掉diff
var maxProfit = function (prices) {
  let res = 0
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    if (prices[i + 1] > prices[i]) res += prices[i + 1] - prices[i]
  }
  return res
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
