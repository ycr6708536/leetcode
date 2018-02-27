/**
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].

https://leetcode.com/problems/search-for-a-range/description/
 */


 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = end = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      end = i;
      if (start === -1) start = i;
    }
  }

  return [start, end];
};