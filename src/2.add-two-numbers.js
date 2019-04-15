/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.67%)
 * Total Accepted:    828.9K
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    var r = new ListNode(0);
    var rr = r;
    var p = 0;

    while (l1 || l2) {
        var x = l1 ? l1.val : 0;
        var y = l2 ? l2.val : 0;
        var tmp = x + y + p;
        r.next = new ListNode(tmp % 10);
        r = r.next;
        p = tmp > 9 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    if (p > 0) {
        r.next = new ListNode(1);
    }
    return rr.next;
};

module.exports = addTwoNumbers;
