/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  var sum = 0
  var index = 0
  let len = s.length
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  for (let i = 0; i < g.length; i++) {
    let lens = s.length - index
    if (lens < 0) {
      break
    } else {
      for (let j = index; j < len; j++) {
        index++
        if (g[i] <= s[j]) {
          sum++
          break
        }
      }
    }
  }
  return sum
}
