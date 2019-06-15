/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
  let res = []
  let plusOne = 0
  let num = 0
  //补0 ab对齐
  while (a.length > b.length) {
    b = 0 + b
  }
  while (a.length < b.length) {
    a = 0 + a
  }
  //从右向左依次相加
  for (let i = a.length - 1; i >= 0; i--) {
    num = parseInt(a[i]) + parseInt(b[i]) + plusOne
    if (num >= 2) {
      res[i] = num - 2
      plusOne = 1
    } else {
      res[i] = num
      plusOne = 0
    }
  }
  if (plusOne > 0) res.unshift(1)
  return res.join('')
}
console.log(addBinary('11', '1'))
