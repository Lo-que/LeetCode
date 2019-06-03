/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const MAP = { ')': '(', ']': '[', '}': '{' }
    let stack = []
    for (let i = 0, len = s.length; i < len; i++) {
        let c = s.charAt(i)
        if (c in MAP) {
            let t = stack.length == 0 ? '#' : stack.pop() //栈顶元素
            if (t != MAP[c]) return false
        } else {
            stack.push(c)
        }
    }
    return stack.length == 0
};
