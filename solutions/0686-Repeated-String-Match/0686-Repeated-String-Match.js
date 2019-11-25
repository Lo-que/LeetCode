/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let times = Math.ceil(B.length / A.length)
  let A2 = A.repeat(times)
  let A3 = A2 + A
  if (A2.indexOf(B) !== -1) {
    return times
  } else if (A3.indexOf(B) !== -1) {
    return times + 1
  } else {
    return -1
  }
}
