/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * https://leetcode.com/problems/3sum-closest/description/
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);

  if(nums.length<=3){
    return eval(nums.join("+"));
  }

  var ans = nums[0]+nums[1]+nums[2];
  for (var i = 0; i < nums.length - 2; i++) {
    var j = i + 1;
    var e = nums.length - 1;

    while (j < e) {
      var sum = nums[i] + nums[j] + nums[e];

      if (Math.abs(target - ans) > Math.abs(target - sum)) {
        ans = sum;
        if (ans === target) return ans;
      }

      sum > target ? e-- : j++;
    }

  }
  return ans;
};
