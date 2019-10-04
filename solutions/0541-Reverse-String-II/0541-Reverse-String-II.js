/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  return s
    .match(new RegExp(`(\\w){${2 * k}}|((\\w){1,${2 * k - 1}}$)`, 'g')) // 按2k 个字符分成数组
    .map(str => [...str.slice(0, k)].reverse().join('') + str.slice(k)) // 每2k 个字符的前半部分逆序 后半部分不变
    .join('') // 组合每2k个项目成字符串
}

var reverseStr = function(s, k) {
  let res = ''
  for (let i = 0; i < s.length; i += 2 * k) {
    res += [...s.slice(i, i + k)].reverse().join('') + s.slice(i + k, i + 2 * k)
  }
  return res
}
