/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let temp = m + n - 1;
  let i = m - 1
  let j = n - 1
  while (i >= 0 && (j >= 0)) {
    nums1[temp--] = (nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--]
  }
  while (j >= 0) {
    nums1[temp--] = nums2[j--];
  }
  console.log(nums1)
}

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  nums1.sort((a, b) => (a - b))
}
