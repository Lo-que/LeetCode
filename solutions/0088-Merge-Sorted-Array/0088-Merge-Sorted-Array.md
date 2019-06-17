#### 题目描述

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

**说明:**

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

**示例 :**

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

#### 题目解析

真男人就要低调，朴素！像莱昂纳德一样。猛龙总冠军，小卡MVP！

朴素的解法，将两个数组合并之后再排序，当然时间复杂度比较差。

为了优化时间复杂度，针对于有序数组可以考虑使用双指针法达到*O*(n + m)的时间复杂度。

最直接的算法实现是将指针 `p1` 置为 `nums1`的开头， `p2`为 `nums2`的开头，在每一步将最小值放入输出数组中。

由于 `nums1` 是用于输出的数组，需要将`nums1`中的前`m`个元素放在其他地方，也就需要 *O*(m) 的空间复杂度。但仍然要使用*O*(m)的额外空间。毕竟要从头改变`nums1`的值需要把`nums1`中的元素存放到其他位置。

对，从头。

所以我们可以从后往前扫描以减少空间复杂度。

从尾部开始进行扫描，比较`nums1`和`nums2`的大小，更大的放进去，其指针前移，接下来依次决定每一个位置的值直到扫描结束。如果`nums1`中所有的元素都比`nums2`小，那么前`m`个还是`nums1`原来的内容，没有改变。如果`nums1`中的数组比`nums2`大的，当`nums1`循环完了，`nums2`中还有元素没加入`nums1`，直接用个循环把`nums2`中所有的元素覆盖到`nums1`剩下的位置。

尤其别忘记考虑两个数组有剩余的情况

- 如果此时`nums1`仍有剩余：无需处理。因为`nums1`的数字就是有序的，不需要再次复制了，`nums1`的前面的数字已经存在于`nums1`中了。
- 如果`nums2`仍有剩余：那么就把`nums2`中数字复制到`nums1`中，这里是必须要要用到，因为`nums2`中数字可不在`nums1`中。

**复杂度分析：**

- 时间复杂度：*O*(n + m)。
- 空间复杂度：*O*(1)，没有使用额外的空间。


