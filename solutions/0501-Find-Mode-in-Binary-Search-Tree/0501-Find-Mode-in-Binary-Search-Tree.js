/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/** 先将二叉树各节点值转换至数组，再通过对象与二维数组获取众数 */
var findMode = function(root) {
  const result = [[]]
  const numbers = []
  const dfs = node => {
    if (!node) return
    dfs(node.left)
    numbers.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  const map = {}
  for (let number of numbers) {
    map[number] = ~~map[number] + 1
    const num = map[number]
    if (result[num] === undefined) {
      result[num] = []
    }
    result[num].push(number)
  }
  return result[result.length - 1]
}
