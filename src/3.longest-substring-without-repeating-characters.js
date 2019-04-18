/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.01%)
 * Total Accepted:    877.3K
 * Total Submissions: 3.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
// 'dvdf'
var lengthOfLongestSubstring = function(s) {
    var t='';
    var max = 0;
    var cur = 0;
    var tmp = 0;
    while(cur<s.length){
        let tl = t.indexOf(s[cur])
        if(tl > -1){
            cur = tmp+tl + 1;
            tmp = cur;
            t = s[cur];
        }else{
            t+=s[cur];
            max = Math.max(max,t.length)
        }
        cur++
    }
    
    return max;
};

module.exports = lengthOfLongestSubstring;