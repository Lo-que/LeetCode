/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length < 2) return true
  //遍历数组，判断目标元素、前后元素之间的大小
  //1.当目标元素索引为1，前一个元素则为0，此时若arr[0]>arr[1],将arr[0]值设置为arr[1]
  //2.当目标元素索引大于1，arr[i] > arr[i+1]
  //2.1目标元素的前元素大于后元素，arr[i+1]=arr[i]
  //2.2目标元素的前元素小于或等于后元素 arr[i]=arr[i-1]
  var count = 0
  if (nums[0] > nums[1]) {
    nums[0] = nums[1]
    count++
  }
  for (var i = 1; i < nums.length - 1; i++) {
    var right = nums[i + 1]
    if (nums[i] > nums[i + 1]) {
      count++
      if (count > 1) return false
      var left = nums[i - 1]
      if (left > right) {
        nums[i + 1] = nums[i]
      } else {
        nums[i] = left
      }
    }
  }
  return true
}
