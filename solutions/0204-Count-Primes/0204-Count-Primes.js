/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let res = 0
  let nums = [...Array(n).keys()] // 标记默认值
  for (let i = 2, len = nums.length; i < len; i++) {
    nums[i] = 1
  }
  for (let i = 2, len = nums.length; i * i < len; i++) {
    if (nums[i] === 1) {
      for (let j = i * i; j < len; j += i) {
        nums[j] = 0
      }
    }
  }
  nums.map((item, index) => {
    if (index > 1) res += item
  })
  return res
}
console.log(countPrimes(10))
