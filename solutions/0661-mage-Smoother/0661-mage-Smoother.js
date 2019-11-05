/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  var m = new Array(M.length)
  for (let i = 0; i < m.length; ++i) {
    m[i] = new Array(M[0].length)
  }
  var pos = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1]
  ]
  for (let i = 0; i < M.length; ++i) {
    for (let j = 0; j < M[0].length; ++j) {
      let count = 1
      let sum = M[i][j]
      for (let k = 0; k < pos.length; ++k) {
        let x = i + pos[k][0]
        let y = j + pos[k][1]
        if (isIn(x, y, M)) {
          count++
          sum += M[x][y]
        }
      }
      m[i][j] = Math.floor(sum / count)
    }
  }
  return m
}
var isIn = function(x, y, M) {
  if (x >= 0 && x < M.length && y >= 0 && y < M[0].length) return true
  return false
}

var imageSmoother = function(M) {
  let rows = M.length,
    cols = M[0].length
  let res = []
  for (let i = 0; i < rows; i++) {
    res[i] = []
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0,
        count = 0
      // m n 的范围判断 精髓
      for (let m = Math.max(0, i - 1); m <= Math.min(rows - 1, i + 1); m++) {
        for (let n = Math.max(0, j - 1); n <= Math.min(cols - 1, j + 1); n++) {
          sum += M[m][n]
          count++
        }
      }
      res[i][j] = Math.floor(sum / count)
    }
  }
  return res
}
