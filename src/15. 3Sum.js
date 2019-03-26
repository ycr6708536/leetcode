/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * 
 * 
 * https://leetcode.com/problems/3sum/description/
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let r = [];

  for (var i = 0; i < nums.length - 2; i++) {
    j = i + 1;
    k = nums.length - 1;
    if(i>0 && nums[i]===nums[i-1])continue;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        r.push([nums[i], nums[j], nums[k]]);
        let t = nums[j];
        while (t === nums[++j] && j < k) {  }
        t = nums[k];
        while (t === nums[--k] && k > j) { }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return r;
};