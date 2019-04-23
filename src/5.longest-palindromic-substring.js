/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.70%)
 * Total Accepted:    525.2K
 * Total Submissions: 1.9M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "dbabdadd"
 * Output: "dbabd"
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length-1;
    var start = 0;

    return isPalindrome(s,start+1,len)
};

var isPalindrome = function(s,start,len){
    if(start === len){
        return true
    } else if(isPalindrome(s,start+1,len-1) &&)
}

module.exports = longestPalindrome;
