/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-16 22:35:12
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-16 23:04:25
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (s.length === 0) {
    return s
  }
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
    arr = s.split(''),
    arr_len = arr.length
  let i = 0,
    j = arr_len - 1
  while (i <= j) {
    while (!vowels.includes(arr[i]) && i < j) {
      i++
    }
    while (!vowels.includes(arr[j]) && i < j) {
      j--
    }
    if (i >= j) {
      break
    }
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    i++
    j--
  }
  return arr.join('')
}
