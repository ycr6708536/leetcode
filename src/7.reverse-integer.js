/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
// 字符串算法
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   var MAX = 2147483647
//   var min = -2147483648
//   if(x===0)return 0

//   var xs = x.toString();
//   var prefix = xs[0] === '-' ? '-' : ''
//   xs = xs.replace('-','')
//   // 转换成数组翻转
//   xs = xs.split('').reverse().join('')
//   xs = xs.replace(/^0*/,'')
//   var r = parseInt(prefix+xs,10) 
//   if(r>MAX || r<min)return 0
//   return r
// };

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var max1 = 214748364
  var min1 = -214748364
  var ret = 0
  while (x != 0) {
    var pop = x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)

    if (ret > max1 || (ret === max1 && pop > 7)) return 0
    if (ret < min1 || (ret === min1 && pop < -8)) return 0
    ret = ret * 10 + pop
  }
  return ret
};


module.exports = reverse