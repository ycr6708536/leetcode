/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.15%)
 * Total Accepted:    251.8K
 * Total Submissions: 782.5K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 */
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function (s) {
//     // 空字符串 末尾是 ‘ ’ 的最后一个单词长度是0
//     var last = 0;
//     var cur = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') {
//             cur++;
//         } else {
//             last = cur > 0 ? cur : last;
//             cur = 0;
//         }
//     }
//     last = cur > 0 ? cur : last;
//     return last;

// };
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // 空字符串 末尾是 ‘ ’ 的最后一个单词长度是0
    s = s.trim()
    var count=0;
    for (var i = s.length-1; i >-1; i--,count++) {
        if(s[i]===' ')return count
    }
    return count;
};