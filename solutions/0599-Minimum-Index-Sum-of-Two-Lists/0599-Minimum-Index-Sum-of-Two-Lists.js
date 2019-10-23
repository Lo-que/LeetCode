/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let [set1, set2] = [new Set(list1), new Set(list2)]
  let [res, tmpIdx] = [[], -1]
  set1.forEach(function(value) {
    if (set2.has(value)) {
      let currIdx = list1.indexOf(value) + list2.indexOf(value)
      if (tmpIdx === -1 || currIdx <= tmpIdx) {
        res.push(value)
        tmpIdx = currIdx
      }
    }
  })
  return res
}
