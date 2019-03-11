/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.86%)
 * Total Accepted:    515.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val
    this.next = null
}

var mergeTwoLists = function (l1, l2) {
    var r = new ListNode(0)
    var rr = r

    while (l1 && l2) {
        if (l1.val < l2.val) {
            r.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            r.next = new ListNode(l2.val)
            l2 = l2.next
        }
        r = r.next
    }
    if (!l1) {
        r.next = l2
    } else {
        r.next = l1
    }
    return rr.next
}