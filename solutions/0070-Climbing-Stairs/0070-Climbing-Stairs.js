/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = []
  if (n === 1) return 1
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
/*
dp[i] = dp[i - 1] + dp[i - 2]
似曾相识，好像斐波那契数
相较于动态规划法维护了一个dp数组  明显空间复杂度得到极大提升，常量级空间
 */
var climbStairs = function (n) {
  let first = 1
  let second = 2
  if (n === 1) return 1
  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }
  return second
}
