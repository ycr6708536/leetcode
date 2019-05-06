/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var result = Infinity
  nums = nums.sort((a, b) => a - b)

  for (var i = 0; i < nums.length - 2;) {
    var l = i + 1
    var r = nums.length - 1

    while (l < r) {
      var tmp = nums[l] + nums[r] + nums[i]
      if (tmp === target) {
        return target
      } else if (tmp < target) {
        result = Math.abs(target - result) > Math.abs(target - tmp) ? tmp : result
        do {
          l++
        } while (l < r && nums[l] === nums[l - 1])
      } else {
        result = Math.abs(target - result) > Math.abs(target - tmp) ? tmp : result
        do {
          r--
        } while (l < r && nums[r] === nums[r + 1])
      }
    }

    do {
      i++
    } while (i < nums.length - 2 && nums[i] === nums[i - 1])
  }

  return result
};


module.exports = threeSumClosest