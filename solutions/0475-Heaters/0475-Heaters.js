/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let ans = Number.MIN_SAFE_INTEGER
  heaters.sort((a, b) => a - b)
  const len = heaters.length
  const binarySearch = (array, start, end, target) => {
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2)
      const middle = array[mid]
      if (target > middle) {
        start = mid + 1
      } else {
        end = mid
      }
    }
    return start
  }

  for (let i = 0, max = houses.length; i < max; i++) {
    const house = houses[i]
    const targetPos = binarySearch(heaters, 0, len - 1, house)
    let closestDistance = Number.MAX_SAFE_INTEGER
    if (heaters[targetPos] === house) {
      ans = Math.max(ans, 0)
      continue
    }
    const pre = heaters[targetPos - 1]
    const cur = heaters[targetPos]
    if (pre !== undefined) {
      closestDistance = Math.min(closestDistance, Math.abs(house - pre))
    }
    closestDistance = Math.min(closestDistance, Math.abs(house - cur))

    ans = Math.max(ans, closestDistance)
  }

  return ans
}
