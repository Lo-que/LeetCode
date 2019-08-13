/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sum = []
  this.sum[0] = 0 // 需要一个虚拟0来避免在sumRange中进行条件检查
  for (let i = 0, len = nums.length; i < len; i++) {
    this.sum[i + 1] = this.sum[i] + nums[i]
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sum[j + 1] - this.sum[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
