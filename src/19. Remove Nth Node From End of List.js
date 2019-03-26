// 删除倒序第n个元素
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let len = 0;
  let cur = head;
  // 求链表长度
  while (cur) {
    len++;
    cur = cur.next;
  }

  // 数据不对返回原链表
  if (len < n) {
    return head;
  }
  // 正序要删除节点的位置
  let diff = len - n;

  // 删除头结点需要返回新的头
  if (diff === 0) return head.next;

  // 查找要删除的节点位置
  cur = head;
  for (let i = 0; i < diff - 1; i++) {
    cur = cur.next;
  }
  // 如果是最后一个节点则不删除
  if(cur.next){
    cur.next = cur.next.next;
  }
  return head;
};

