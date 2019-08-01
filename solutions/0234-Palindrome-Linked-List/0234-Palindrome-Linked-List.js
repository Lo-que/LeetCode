/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true
  let slow = head
  let fast = head
  let prev = null
  while (fast) {
    slow = slow.next
    fast = fast.next ? fast.next.next : fast.next
  }
  while (slow) {
    let temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  }
  while (head && prev) {
    if (head.val !== prev.val) return false
    head = head.next
    prev = prev.next
  }
  return true
}
