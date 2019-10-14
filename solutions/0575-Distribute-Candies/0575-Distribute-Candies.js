/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let set = new Set()
  candies.map(v => set.add(v))
  return set.size > candies.length / 2 ? candies.length / 2 : set.size
}
