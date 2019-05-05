/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
// 暴力超时了
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     if(nums.length<3)return[]

//     var result = []
//     for(var i=0;i<=nums.length-3;i++){
//       for(var j=i+1;j<=nums.length-2;j++){
//         for(var k=j+1;k<=nums.length-1;k++){
//           if(nums[i]+nums[j]+nums[k]===0){
//             var ns = [nums[i],nums[j],nums[k]].sort()
//             var target = result.find(item=>item[0]===ns[0]&&item[1]===ns[1]&&item[2]===ns[2])
//             if(!target){
//               result.push(ns)
//               break
//             }
//           }

//         }
//       }
//     }
//     return result
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)

  var result = []

  for (var i = 0; i < nums.length - 2;) {
    var l = i + 1;
    var r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === -nums[i]) {
        var t = [nums[i], nums[l], nums[r]]
        var target = result.find(item => item[0] === t[0] && item[1] === t[1] && item[2] === t[2])
        if (!target) {
          result.push(t)
        }
        do {
          l++
        } while (l < r && nums[l] === nums[l - 1])
        do {
          r--
        } while (l < r && nums[r] === nums[r + 1])
      } else if (nums[l] + nums[r] < -nums[i]) {
        l++
      } else {
        r--
      }
    }

    do {
      i++
    } while (i < nums.length-2 && nums[i] === nums[i- 1])
  }
  return result
};

module.exports = threeSum