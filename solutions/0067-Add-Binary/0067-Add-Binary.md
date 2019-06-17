#### 题目描述

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

**示例 1:**

```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**

```
输入: a = "1010", b = "1011"
输出: "10101"
```

#### 题目解析

该题和第66题一样，粗略一看让人觉得很简单，很容易考虑不全面而导致不通过。

```javascript
var addBinary = function(a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
```

在一般情况下，即a和b的十进制数在 2^53^以下，都不会有问题；但是一旦超过该范围，就会产生计算失真。有兴趣可以`google`一下`IEEE754`双精度浮点数。

决定使用和66题类似的数学方法解决。

二进制中肯定要注意位数，为了保证位数一致，我们对数量少的字符串补0，之后就通过数学方法从右向左依次相加。维护一个`plusOne`确定进位，维护一个`num`存放当前结果。

尤其注意如果一直都在进位的话 需要在最后向结果数组前`unshift`一个’1‘进去。

别忘了最后转成字符串。

**复杂度分析：**

- 时间复杂度：*O*(n)
- 空间复杂度：*O*(n)
