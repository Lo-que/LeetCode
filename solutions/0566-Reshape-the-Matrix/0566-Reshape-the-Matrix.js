/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let num = []
  nums.forEach(v => {
    v.forEach(v => {
      num.push(v)
    })
  })
  if (num.length !== r * c) return nums
  else {
    var ans = []
    for (let i = 0; i < r; i++) {
      ans[i] = []
      for (let k = 0; k < c; k++) {
        ans[i].push(num.shift())
      }
    }
    return ans
  }
}
