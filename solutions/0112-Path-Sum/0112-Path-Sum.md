#### 题目描述

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

**说明:** 叶子节点是指没有子节点的节点。

**示例:** 
给定如下二叉树，以及目标和 sum = 22，

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```

返回 `true`。

**示例2:**

给定二叉树 `[1,2,2,3,3,null,null,4,4]`

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

返回 `false`。

#### 题目解析

似曾相识的题目。

1. 左子树是平衡二叉树
2. 右子树是平衡二叉树
3. 左右子树高度不超过1

很明显的递归策略。

很明显，该方法在计算节点深度时产生了大量重复计算。

采用提前阻断的方法可以得到*O*(n)的时间复杂度。

在对 `root` 做 `dfs` 时，会从下至上获得每个 `root` 的左右子树高度，当我们发现有一例左右子树高度差 ＞1的情况时 `return -1` ，代表此树不是平衡树。

**复杂度分析：**

- 时间复杂度：*O*(n^2^)

- 空间复杂度：*O*(n)。

  