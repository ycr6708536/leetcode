/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.63%)
 * Total Accepted:    264.3K
 * Total Submissions: 665.3K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var r = '1'
    // 报数次数
    for (i = 1; i < n; i++) {
        var count = 0
        var tmp = ''
        var cur = '1'
        // 获取报数结果
        for (var j = r.length-1; j >-1 ; j--) {
            if (r[j] === cur) {
                count++
            } else {
                tmp=count+cur+tmp
                cur = r[j]
                count = 1
            }
        }
        tmp=count+cur+tmp
        r=tmp
    }

    return r
}
// console.log(countAndSay(1))
// console.log(countAndSay(2))
// console.log(countAndSay(3))
// console.log(countAndSay(4))
