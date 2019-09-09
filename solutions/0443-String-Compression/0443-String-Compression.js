/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  const len = chars.length
  for (var i = 0, j = 0; j < len; ) {
    chars[i] = chars[j]
    let temp = j
    while (j < len && chars[i] === chars[j]) {
      j++
    }
    i++
    const dis = j - temp
    if (dis > 1) {
      var distance = Array.from('' + dis)
      for (var k = 0; k < distance.length; k++) {
        chars[i++] = distance[k]
      }
    }
  }
  return i
}
