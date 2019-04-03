/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (30.76%)
 * Total Accepted:    342.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
function division2(x) {
    return Math.ceil(x / 2)
}

var mySqrt = function (x) {
    if (x === 0) return 0
    if (x === 1) return 1
    var min = 1,
        max = division2(x)
    if (max > 46340) {
        max = 46340
    }
    while (max !== min) {
        let mid = division2(max + min / 2);
        if (mid === min) {
            if(max*max<=x){
                return max
            }else{
                return min
            }
        }else if(mid*mid>x){
            max = mid
        }else if(mid*mid<x){
            min = mid
        }else{
            return mid
        }
    }
    return max
};

module.exports = mySqrt