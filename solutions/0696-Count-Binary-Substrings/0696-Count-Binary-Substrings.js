/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let n = 0,
    arr = s.match(/([1]+)|([0]+)/g)
  for (let i = 0; i < arr.length - 1; i++) {
    n += Math.min(arr[i].length, arr[i + 1].length)
  }
  return n
}
