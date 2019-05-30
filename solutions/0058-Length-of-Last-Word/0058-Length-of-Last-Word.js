/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var temp = s.trim().split(' ')
  return temp[temp.length - 1].length
}
console.log(lengthOfLastWord(" "))


// return s.length - s.lastIndexOf(' ') - 1
