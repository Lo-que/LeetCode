/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const calPath = (root, path, paths) => {
    if (root) {
      path += root.val
      if (!root.left && !root.right) {
        paths.push(path)
      } else {
        path += '->'
        calPath(root.left, path, paths)
        calPath(root.right, path, paths)
      }
    }
  }

  let paths = []
  calPath(root, '', paths)
  return paths
}
