#### 题目描述

给定一个整数数组 `nums`和一个目标值 `target`，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

~~~
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
~~~



#### 题目解析

使用Hash表来解决该问题

* 对象属性的key是顺序遍历中数组项的value，对象属性的value是数组项的下标。

设置一个`map`当作容器，然后遍历数组

1. 每次遍历时使用临时变量`remain`存放目标值与当前值的差值
2. 在此次遍历中查找`map`查找是否有与`remain`一致的值，一致则返回
3. 未找到则在`map`中存放该元素与索引



**复杂度分析：**

- 时间复杂度：O(n)，我们只遍历了包含有 n 个元素的列表一次。在表中进行的每次查找只花费 O(1)的时间。
- 空间复杂度：O(n)，所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 n个元素。