/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.73%)
 * Total Accepted:    364.8K
 * Total Submissions: 893.5K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 投机取巧
    var i = digits.length - 1
    digits[i] = digits[i]
    var t=1
    while (i > -1) {
        var tmp = ( digits[i] +t )
        t = Math.floor(tmp / 10)
        digits[i] = tmp%10
        i--;
        if(t===0){
            break;
        }
    }
    if(t>0){
        digits.unshift(1)
    }

    return digits
};
