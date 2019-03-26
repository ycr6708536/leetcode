/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.06%)
 * Total Accepted:    284.3K
 * Total Submissions: 742.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var l1 = a.length - 1;
    var l2 = b.length - 1;
    var r = '';
    var pre = 0;

    while (l1 > -1 || l2 > -1) {
        var tmp = pre;
        tmp += l1>-1 ?parseInt(a[l1],10):0;
        tmp+=l2>-1?parseInt(b[l2],10):0;
        r = (tmp%2).toString().concat(r)
     
        pre = tmp > 1 ? 1 : 0
        l1--;
        l2--;
    }
    if(pre === 1){
        r = '1'.concat(r)
    }
    return r
};

module.exports = addBinary
