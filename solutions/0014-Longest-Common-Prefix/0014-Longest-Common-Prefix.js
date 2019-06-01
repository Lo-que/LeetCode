/**
 * @param {string[]} strs
 * @return {string}
 */
// eslint-disable-next-line func-names
const longestCommonPrefix = function (strs) {
    const str = strs[0]
    let flag = false
    let temp = ''
    if (strs.length === 1) return strs[0].toLowerCase()
    if (strs.length < 1) return ''
    for (let i = 1; i <= str.length; i++) {
        temp = str.substr(0, i)
        flag = strs.every((item) => item.indexOf(temp) == 0 ? true : false)
        if (!flag) {
            temp = temp.substr(0, i - 1)
            break
        }
    }
    return temp.toLowerCase()
}
