/*
 * @Descripttion:
 * @version:
 * @Author: qudongqi
 * @Date: 2019-08-28 23:12:39
 * @LastEditors: qudongqi
 * @LastEditTime: 2019-08-28 23:17:51
 */
/**
 * @param {number} num
 * @return {string}
 */
/*
* 使用0xf(00...01111b)获取num的低4位。
* >>算数位移，其中正数右移左边补0，负数右移左边补1。
* 位移运算并不能保证num==0，需要使用32位int保证（对应16进制小于等于8位）。
*/
var toHex = function(num) {
  if (num === 0) return '0'
  let hex = '0123456789abcdef',
    result = ''
  while (num && result.length < 8) {
    result = hex[num & 0xf] + result
    num = num >> 4
  }
  return result
}
