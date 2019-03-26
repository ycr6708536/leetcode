/**
 mplement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.
https://leetcode.com/problems/string-to-integer-atoi/description/
 */

 /**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();


  let i = 1,
    len = str.length,
    base = 0,
    fix = 1;

  if (str[0] === '+') {
    fix = 1;
  } else if (str[0] === '-') {
    fix = -1;
  } else {
    i = 0;
  }
  for (; i < len; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      base = base * 10 + (str[i] - 0);
      if (base > 2147483647 ) {
        if(fix==1){

          base = 2147483647;
        }else{
          base = 2147483648;
        }
        break;
      }

    } else {
      break;
    }
  }

  return base * fix;

};

// console.log(myAtoi("  -0012a42"));
