/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = []
  res[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    res[i] = 0
    for (let j = i; j > 0; j--) {
      res[j] += res[j - 1]
    }
  }
  return res
}

var getRow = function (rowIndex) {
  let res = []
  let tmp = 1
  for (let i = 0; i <= rowIndex; i++) {
    res.push(tmp)
    tmp = tmp * (rowIndex - i) / (i + 1)
  }
  return res
}
