/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (41.96%)
 * Total Accepted:    313.4K
 * Total Submissions: 743K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function (head) {
//     if(!head)return null
//     let p = new ListNode(head.val);
//     var cur = p;
//     while (head.next) {
//         head = head.next
//         if (head.val !== cur.val) {
//             cur.next = new ListNode(head.val)
//             cur = cur.next
//         }
//     }
//     return p;
// };

var deleteDuplicates = function (head) {
    if(!head)return null
    let p = head;
    while (p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head;
};
module.exports = deleteDuplicates;