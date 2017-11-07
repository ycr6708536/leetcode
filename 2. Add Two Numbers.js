/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
https://leetcode.com/problems/add-two-numbers/description/
*/

var addTwoNumbers = function(l1, l2) {
  var r = rr = new ListNode(0),
    n = 0,
    t, v1, v2;

  while ((l1 && l1.next) || (l2 && l2.next)) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;
    t = v1 + v2 + n;
    if (t >= 10) {
      r.val = t % 10;
      n = 1;
    } else {
      r.val = t;
      n = 0;
    }
    r.next = new ListNode();
    r = r.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  v1 = l1 ? l1.val : 0;
  v2 = l2 ? l2.val : 0;
  t = v1 + v2 + n;
  if (t >= 10) {
    r.val = t % 10;
    r.next = new ListNode(1);
  } else {
    r.val = t;
  }

  return rr;
};
