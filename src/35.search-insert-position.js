/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.48%)
 * Total Accepted:    369.8K
 * Total Submissions: 912.7K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 判断空数组
    if(nums.length === 0)return 0
    // 判断小于第一个数字直接返回
    if(target<nums[0])return 0
    // 判断大于最后一个数字直接返回
    if(target>nums[nums.length-1])return nums.length
  
    var start = 0;
    var end= nums.length-1;
  
    while(start<end){
      var mid = Math.floor((start+end)/2)
      if(nums[mid]===target){
        return mid
      }else if(nums[mid]>target){
        end = mid-1;
      }else {
        start = mid+1;
      }
    }
    // 没有找到情况只有两种 
    if(nums[start]>=target){
          return start;
      }
      else{
          return start+1;
      }
  };
// console.log(searchInsert([3,4,5,6,7,8], 6))