var twoSum = function(numbers, target) {
  let map = {}
  for (let i = 0, len = numbers.length; i < len; i++) {
    if (map[numbers[i]] !== undefined) return [map[numbers[i]] + 1, i + 1]
    map[target - numbers[i]] = i
  }
}