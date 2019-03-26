/**
 * Write a function to find the longest common prefix string amongst an array of strings.


 * 
 * https://leetcode.com/problems/longest-common-prefix/description/
 * 
 * 字符串排序 先对比第一个字母相同然后才好
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let r = '';
  if (strs.length <= 0) return r;
  let l = strs.length;

  for (let i = 0; i < strs[0].length; i++) {
    let tr = r + strs[0][i];
    let reg = new RegExp('^' + tr);
    for (var j = 0; j < l; j++) {
      if (!reg.test(strs[j])) {
        break;
      }
    }
    if (j == l) {
      r = tr;
    } else {
      break;
    }
  }

  return r;
};
