// /*
//  * @lc app=leetcode id=28 lang=javascript
//  *
//  * [28] Implement strStr()
//  *
//  * https://leetcode.com/problems/implement-strstr/description/
//  *
//  * algorithms
//  * Easy (31.31%)
//  * Total Accepted:    390.9K
//  * Total Submissions: 1.2M
//  * Testcase Example:  '"hello"\n"ll"'
//  *
//  * Implement strStr().
//  * 
//  * Return the index of the first occurrence of needle in haystack, or -1 if
//  * needle is not part of haystack.
//  * 
//  * Example 1:
//  * 
//  * 
//  * Input: haystack = "hello", needle = "ll"
//  * Output: 2
//  * 
//  * 
//  * Example 2:
//  * 
//  * 
//  * Input: haystack = "aaaaa", needle = "bba"
//  * Output: -1
//  * 
//  * 
//  * Clarification:
//  * 
//  * What should we return when needle is an empty string? This is a great
//  * question to ask during an interview.
//  * 
//  * For the purpose of this problem, we will return 0 when needle is an empty
//  * string. This is consistent to C's strstr() and Java's indexOf().
//  * 
//  */
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  * 暴力破解
//  */
// var strStr = function (haystack, needle) {
//     if (!needle) return 0
//     if (!haystack) return -1

//     var p = i = 0;
//     var pl = haystack.length;
//     var nl = needle.length;
//     if (pl < nl ) return -1;

//     while (p < pl) {
//         if (haystack[p + i] === needle[i]) {
//             if (i === nl-1) {
//                 return p
//             } else {
//                 i++
//             }
//         } else {
//             i = 0;
//             p++
//         }
//     }
//     return -1
// };

function getNext(str) {
    var len = str.length;
    var next = [-1];
    var j = 0,
        k = -1;

    while (j < len - 1) {
        if (k === -1 || str[j] === str[k]) {
            next[++j] = ++k
        } else {
            k = next[k]
        }
    }
    return next
}


var strStr = function (haystack, needle) {
    var l1 = haystack.length;
    var l2 = needle.length;
    var next = getNext(needle);
    var i1 = i2 = 0;
    if (l2 === 0) return 0
    if (l1 === 0) return -1
    if (l1 < l2) return -1

    while (i1 < l1) {
        if (i2 === -1 || haystack[i1] === needle[i2]) {
            if (i2 === l2 - 1) {
                return i1 - i2
            } else {
                i2++
                i1++
            }
        } else {
            i2 = next[i2]

        }
    }
    return -1

}