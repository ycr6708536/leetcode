/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.55%)
 * Total Accepted:    373.3K
 * Total Submissions: 853.6K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Input:4 
 * Output: 5
 * 1. 1 1 1 1
 * 2. 1 1 2
 * 3. 1 2 1
 * 4. 2 1 1
 * 5. 2 2
 *
 * Input:5 
 * Output: 5
 * 1. 1 1 1 1 1
 * 2. 1 1 1 2
 * 3. 1 2 1 1
 * 4. 2 1 1 1
 * 5. 2 2 1 
 * 6. 1 2 2 
 * 7. 2 1 2
 * 
 */


/**
 * @param {number} n
 * @return {number}
 */
/** 动态规划 */
// var climbStairs = function (n) {
//     if (n === 1) {
//         return 1
//     }
//     if (n === 2) {
//         return 2;
//     }
//     let num = [1, 2]
//     let r = 0;
//     for (var i = 2; i < n; i++) {
//         num[i] = num[i-1]+num[i-2]
//     }
//     return num[i-1]
// };
/** 暴力枚举 */

// var climbStairs = function (n) {
//     let cache = []
//     return climb2Stairs(1, n,cache) + climb2Stairs(2, n,cache)
// };

// var climb2Stairs = function (i, n,cache) {
//     if (i > n) {
//         return 0
//     }

//     if (i === n) {
//         return 1
//     }

//     if (cache[i]) {
//         return cache[i]
//     }
    
//     cache[i] = climb2Stairs(i + 1, n,cache) + climb2Stairs(i + 2, n,cache)
//     return cache[i]
// }


var climbStairs = function(n){
    
}
module.exports = climbStairs