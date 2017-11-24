/**
 * 
 * 
 * 
 * 
 * Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

https://leetcode.com/problems/roman-to-integer/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let ROMAN = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let inter = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let r = 0;
  let reg;

  while (s.length > 0) {
    for (var i = 0; i < ROMAN.length; i++) {
      reg = new RegExp('^' + ROMAN[i]);

      if (reg.test(s)) {
        r += inter[i];
        s=s.replace(ROMAN[i], '');
        break;
      }
    }
  }
  return r;
};
