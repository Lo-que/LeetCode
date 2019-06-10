#### 题目描述

实现 [strStr()](https://baike.baidu.com/item/strstr/811469) 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  **-1**。

**示例 1:**

```
输入: haystack = "hello", needle = "ll"
输出: 2
```

**示例 2:**

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

**说明:**

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 0 。这与C语言的 [strstr()](https://baike.baidu.com/item/strstr/811469) 以及 Java的 [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)) 定义相符。

#### 题目解析

事实上，这道题应该用kmp模式匹配算法，但难度应该不属于简单。

这里使用属于简单难度的方法(笑

我知道你们想说indexOf，告辞。

使用暴力解法

1. 依次从主串的首字符开始，与模式串逐一进行匹配；
2. 遇到失配时，则移到主串的第二个字符，将其与模式串首字符比较，逐一进行匹配；
3. 重复上述步骤，直至能匹配上，或剩下主串的长度不足以进行匹配。

emmmmm...执行用时一言难尽吧

**复杂度分析：**

- 时间复杂度：*O*(n*m)
- 空间复杂度：

