/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0]
  let res = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    res = Math.max(res, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return res
}

//此题可以转化为求最大连续子数组和的问题
var maxProfit = function (prices) {
  let res = 0
  //先得到差值
  let diff = []
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    diff[i] = prices[i + 1] - prices[i]
  }
  //维护一个dp数组
  let dp = []
  dp[0] = Math.max(0, diff[0])
  res = dp[0]
  for (let i = 1, len = diff.length; i < len; i++) {
    dp[i] = Math.max(0, dp[i - 1] + diff[i])
    res = Math.max(res, dp[i])
  }
  return res
}

// 可看出 diff数组可被优化掉
var maxProfit = function (prices) {
  let res = 0
  //维护一个dp数组
  let dp = []
  dp[0] = Math.max(0, prices[1] - prices[0])
  res = dp[0]
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    dp[i] = Math.max(0, dp[i - 1] + prices[i + 1] - prices[i])
    res = Math.max(res, dp[i])
  }
  return res
}

//进一步发现  dp数组也可以被优化掉 使用常量级的空间
var maxProfit = function (prices) {
  let res = 0
  let dp = 0
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    dp = Math.max(0, dp + prices[i + 1] - prices[i])
    res = Math.max(res, dp)
  }
  return res
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
