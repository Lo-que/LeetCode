/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let res = 0
  for (let i = 0; i < points.length; i++) {
    const map = new Map()
    for (let j = 0; j < points.length; j++) {
      if (j != i) {
        const d = dis(points[i], points[j])
        if (map.has(d)) {
          map.set(d, map.get(d) + 1)
        } else {
          map.set(d, 1)
        }
      }
    }
    // 计算频次的组合
    map.forEach((val, key) => {
      res += val * (val - 1)
    })
  }
  return res
}

function dis(pa, pb) {
  // 求坐标点间的距离
  return (pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1])
}
