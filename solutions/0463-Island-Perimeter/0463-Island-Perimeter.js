/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  //寻找元素为1的周长和
  var count = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count += 4
        //左右相邻-2
        if (j > 0 && grid[i][j - 1] === 1) count -= 2
        //上下相邻
        if (i > 0 && grid[i - 1][j] === 1) count -= 2
      }
    }
  }
  return count
}

var islandPerimeter = function(grid) {
  let count = 0
  let neighbor = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
          neighbor++
        }
        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
          neighbor++
        }
      }
    }
  }
  return 4 * count - 2 * neighbor
}
