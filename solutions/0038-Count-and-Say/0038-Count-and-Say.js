/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1'
  return countStr(countAndSay(n - 1))
}
const countStr = str => {
  let count = 1
  let res = ''
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === str[i + 1]) {
      count++
      continue
    } else {
      res += '' + count + str[i]
      count = 1
    }
  }
  return res
}

var countAndSay = function countAndSay(n) {
  if (n == 1) return '1'

  function say(str) {
    var reg = /(\d)\1*/g
    var result = ''
    var result_str = ''

    while ((result = reg.exec(str))) {
      result_str += result[0].length + result[1]
    }

    return result_str
  }

  return say(countAndSay(n - 1))
}
console.log(countAndSay(4))
