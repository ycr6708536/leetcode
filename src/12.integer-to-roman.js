/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var keys = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ]
  var values = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1,
  ]
  var result = ''
  while (num > 0) {
    var index = values.findIndex(i => num >= i)
    result += keys[index]
    num-=values[index]
  }
  return result
};
module.exports = intToRoman;