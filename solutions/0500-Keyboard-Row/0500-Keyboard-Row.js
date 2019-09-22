/**
 * @param {string[]} words
 * @return {string[]}
 */
// 正则取巧
var findWords = function(words) {
  return words.filter(word =>
    [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/].some(reg =>
      reg.test(word.toLowerCase())
    )
  )
}
var findWords = function(words) {
  let map = new Map([
    ['q', 1],
    ['w', 1],
    ['e', 1],
    ['r', 1],
    ['t', 1],
    ['y', 1],
    ['u', 1],
    ['i', 1],
    ['o', 1],
    ['p', 1],
    ['a', 2],
    ['s', 2],
    ['d', 2],
    ['f', 2],
    ['g', 2],
    ['h', 2],
    ['j', 2],
    ['k', 2],
    ['l', 2],
    ['z', 3],
    ['x', 3],
    ['c', 3],
    ['v', 3],
    ['b', 3],
    ['n', 3],
    ['m', 3]
  ])
  let res = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let temp = map.get(word[0].toLowerCase())
    for (let j = 0; j < word.length; j++) {
      if (temp == map.get(word[j].toLowerCase())) {
        if (j == word.length - 1) {
          res.push(word)
        }
      } else {
        break
      }
    }
  }
  return res
}
