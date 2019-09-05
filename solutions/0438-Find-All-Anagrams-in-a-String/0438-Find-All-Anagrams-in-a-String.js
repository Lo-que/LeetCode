/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const map = {}
  for (const char of p) {
    map[char] = ~~map[char] + 1
  }

  const currentMap = Object.keys(map).reduce(
    (pre, key) => Object.assign(pre, { [key]: 0 }),
    {}
  )

  const result = []

  for (const [index, char] of [...s].entries()) {
    if (index < p.length - 1) {
      map[char] !== undefined && (currentMap[char] += 1)
      continue
    }
    let lastchar = s[index - p.length]

    if (map[lastchar] !== undefined) {
      currentMap[lastchar] -= 1
    }

    if (map[char] !== undefined) {
      currentMap[char] += 1
    }

    if (JSON.stringify(currentMap) === JSON.stringify(map)) {
      result.push(index - p.length + 1)
    }
  }

  return result
}


const findAnagrams = (s, p) => {
  var map = new Map()
  var res = []
  var flag = 0
  ;[...'abcdefghijklmnopqrstuvwxyz'].forEach((char, i) => map.set(char, 2 ** i))
  for (var i = 0; i < s.length; i++) {
    flag = flag + map.get(p[0]) - map.get(s[i])
    flag === 0 && p.length - 1 <= i && res.push(i + 1 - p.length)
    p = p.slice(1) + s[i]
  }
  return res
}
