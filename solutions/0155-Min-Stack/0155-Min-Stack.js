/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = null
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (this.min === null) {
    this.min = x
  } else {
    this.min = Math.min(this.min, x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.min = this.stack.length
    ? this.stack.reduce((min, num) => Math.min(min, num), Infinity)
    : null
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (!this.stack.length) return null
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
