#### 题目描述

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

**示例 1：**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

**示例 2：**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

#### 题目解析

很出名的题目。

可以通过数学思路使用BF通过递归暴力解决。时间复杂度*O*(2^n^)，空间复杂度*O*(n)递归树的深度为n。

优化的话可以尝试维护一个记忆数组，修复递归树。时间复杂度*O*(n)。

最常见的解法应该是动态规划。

第 `i` 阶可以由以下两种方法得到：

1. 在第 `(i - 1)` 阶后向上爬 1 阶。
2. 在第 `(i − 2)` 阶后向上爬 2 阶。

所以到达第 `i`阶的方法总数就是到第 `(i − 1)` 阶和第 `(i − 2)` 阶的方法数之和。

令 `dp[i]` 表示能到达第 `i` 阶的方法总数：

```
dp[i] = dp[i - 1] + dp[i - 2]
```

等等，这个式子熟不熟悉，是不是似曾相识。

没错，斐波那契也是它。

所以，也可以用斐波那契数解决。

相较于动态规划法维护了一个`dp`数组，斐波那契数明显空间复杂度得到极大提升，使用常量级空间。

既然使用了斐波那契数，斐波那契数的三种不同实现方式了解一下。

矩阵乘法求得第n个斐波那契数的时间复杂度*O*(log~2~n)，常量级空间。

还有更精巧的数学公式法，当然，在量级过大时可能会有误差。

