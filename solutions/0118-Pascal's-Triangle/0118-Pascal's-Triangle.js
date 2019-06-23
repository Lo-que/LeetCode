/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = []
  if (numRows === 0) return res
  res.push([])
  res[0].push(1)
  for (let i = 1; i < numRows; i++) {
    let row = []
    let preRow = res[i - 1]

    row.push(1)

    for (let j = 1; j < i; j++) {
      row.push(preRow[j - 1] + preRow[j])
    }

    row.push(1)
    res.push(row)
  }
  return res
}
