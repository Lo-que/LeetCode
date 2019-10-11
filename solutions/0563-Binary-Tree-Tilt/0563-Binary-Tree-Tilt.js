/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  const getTilt = node => {
    if (!node) {
      return [0, 0, 0]
    }

    const [l, sumll, sumlr] = getTilt(node.left)
    const [r, sumrl, sumrr] = getTilt(node.right)

    return [
      l + r + Math.abs(sumll - sumlr) + Math.abs(sumrl - sumrr),
      sumll + sumlr + (node.left ? node.left.val : 0),
      sumrl + sumrr + (node.right ? node.right.val : 0)
    ]
  }

  const [tilt, left, right] = getTilt(root)

  return tilt + Math.abs(left - right)
}
