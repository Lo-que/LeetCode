/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = {}
  for (let i = 0, len = numbers.length; i < len; i++) {
    if (map[numbers[i]] !== undefined) return [map[numbers[i]] + 1, i + 1]
    map[target - numbers[i]] = i
  }
}

const twoSum = (numbers, target) => {
  let left = 0, right = numbers.length - 1
  while(left < right) {
    let sum = numbers[left] + numbers[right]
    if(sum === target) return [left + 1, right + 1]
    sum > target ? right-- : left++
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
