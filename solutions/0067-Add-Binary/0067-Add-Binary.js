/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
console.log(addBinary('11', '1'))
