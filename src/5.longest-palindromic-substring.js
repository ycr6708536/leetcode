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


function isPalindrome(s,start,end){
    while(start<=end){
        if(s[start]===s[end]){
            start++
            end--
        }else{
            return false
        }
    }
    return true
}


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var s1 = s.split('').reverse();
    var max = 0;
    var map = [];
    var start = 0;
    for(var i = 0;i<s1.length;i++){
        map[i]=[]
        for(var j =0;j<s.length;j++){
            if(s[j]===s1[i]){
                if(i===0 || j === 0){
                    map[i][j]=1
                }else{
                    map[i][j] = map[i-1][j-1]+1
                }
            }else{
                map[i][j] = 0
            }
        }
    }

    for(i=map.length-1;i>-1;i--){
        for(j=map[i].length-1;j>-1;j--){
            if(max < map[j][i] && isPalindrome(s,i - map[j][i]+1,i)){
                max = map[j][i];
                start = i-max+1;
            }
        }
    }

    return s.substr(start, max)
};

module.exports = longestPalindrome;
