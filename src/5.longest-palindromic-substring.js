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

//  公共子串

// function isPalindrome(s,start,end){
//     while(start<=end){
//         if(s[start]===s[end]){
//             start++
//             end--
//         }else{
//             return false
//         }
//     }
//     return true
// }


// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//     var s1 = s.split('').reverse();
//     var max = 0;
//     var map = [];
//     var start = 0;
//     for(var i = 0;i<s1.length;i++){
//         map[i]=[]
//         for(var j =0;j<s.length;j++){
//             if(s[j]===s1[i]){
//                 if(i===0 || j === 0){
//                     map[i][j]=1
//                 }else{
//                     map[i][j] = map[i-1][j-1]+1
//                 }
//             }else{
//                 map[i][j] = 0
//             }
//         }
//     }

//     for(i=map.length-1;i>-1;i--){
//         for(j=map[i].length-1;j>-1;j--){
//             if(max < map[j][i] && isPalindrome(s,i - map[j][i]+1,i)){
//                 max = map[j][i];
//                 start = i-max+1;
//             }
//         }
//     }

//     return s.substr(start, max)
// };

// 动态规划
// var longestPalindrome = function (s) {
//     if (s.length <= 1) return s
//     var substr = []
//     var max = 1;
//     var start = 0;
//     // 查找所有的1，2位的回文子串
//     for(var i =0;i<s.length;i++){
//         substr.push([i,i])
//     }

//     for(i=0;i<s.length-1;i++){
//         if(s[i]===s[i+1]){
//             substr.push([i,i+1])
//             max = 2 
//             start = i
//         }
//     }

//     // 计算每个回文子串的最大长度
//     while (substr.length>0) {
//         var cur = substr.pop()
//         var j = cur[0]
//         var k = cur[1]
//         while (s[j-1] === s[k+1] && s[j-1] !== undefined && s[k+1] !== undefined) {
//             --j
//             ++k
//             if(max<k-j+1){
//                 max = k-j+1
//                 start = j
//             }
//         }
//     }

//     return s.substr(start, max)

// }
// 中心拓展算法
// babad
// var longestPalindrome = function (s) {
//     if (s.length <= 1) return s
//     var start = 0;
//     var max = 0;

//     for (var i = 0; i < s.length; i++) {
//         var l1 = getLong(s, i, i)
//         var l2 = getLong(s, i, i + 1)
//         var l3 = Math.max(l1, l2)
//         if (l3 > max) {
//             max = l3
//             start = i - Math.floor((l3 - 1) / 2)
//         }
//     }
//     return s.substr(start, max)


// }

// function getLong(s, left, right) {
//     var l = left
//     var r = right
//     var len = 0

//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//         len = r - l + 1
//         l--
//         r++
//     }

//     return len
// }

var longestPalindrome = function (s) {
    // 填充#号
    var s1 = `#${s.split('').join('#')}#`;
    var ml = [0];
    var pos = 0;
    var mr = 0;
    var max = 0;
    var start = 0;

    for (var i = 0; i < s1.length; i++) {
        if (i < mr) {
            ml[i] = Math.min(ml[2 * pos - i], mr - i)
        } else {
            ml[i] = 1
        }

        // 扩展
        while (i - ml[i] >= 0 && s1.length >= i + ml[i] && s1[i - ml[i]] === s1[i + ml[i]]) {
            ml[i]++
        }
        // 更新pos和MR
        if (ml[i] + i > mr) {
            mr = ml[i] + i
            pos = i;

        }
        // 记录最大值和起始位置
        if (max < 2 * ml[i] - 1) {
            max = 2 * ml[i] - 1
            start = i - ml[i] + 1;
        }
    }
    return s1.substr(start, max).replace(/#/g, '')
}

module.exports = longestPalindrome;