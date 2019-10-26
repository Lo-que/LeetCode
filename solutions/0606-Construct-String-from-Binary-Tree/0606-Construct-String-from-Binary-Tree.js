/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) {
    return ''
  }
  let rightStr = ''
  if (t.right) {
    rightStr = `(${tree2str(t.right)})`
  }
  let leftStr = `(${tree2str(t.left)})`
  if (!t.right && leftStr === '()') {
    leftStr = ''
  }
  return `${t.val.toString()}${leftStr}${rightStr}`
}
