/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num == 1) {
    return false
  }
  let sum = 1
  let i = 2
  const sqrt = Math.sqrt(num)
  for (; i < sqrt; i++) {
    if (num % i == 0) {
      sum += i
      sum += num / i
    }
  }
  if (i * i == num) {
    sum += i
  }
  return sum == num
}

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  return [6, 28, 496, 8128, 33550336].includes(num)
}
