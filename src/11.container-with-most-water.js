/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    let x = r - l;
    var y = height[l] > height[r] ? height[r] : height[l];
    max = Math.max(max, x * y)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max;
};

module.exports = maxArea;