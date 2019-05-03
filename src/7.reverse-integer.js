/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var MAX = 2147483647
  var min = -2147483648
  if(x===0)return 0

  var xs = x.toString();
  var prefix = xs[0] === '-' ? '-' : ''
  xs = xs.replace('-','')
  // 转换成数组翻转
  xs = xs.split('').reverse().join('')
  xs = xs.replace(/^0*/,'')
  var r = parseInt(prefix+xs,10) 
  if(r>MAX || r<min)return 0
  return r
};

module.exports = reverse