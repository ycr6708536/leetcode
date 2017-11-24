/**
 * 
 * 
 * 罗马数字的基本型为：I=1，V=5，X=10，L=50，C=100，D=500，M=1000，相同的罗马数字最多不能超过三个。所以对于4只能表示为5-1即IV，左减右加。
 * https://leetcode.com/problems/integer-to-roman/description/
 */

 /**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = [];
  while (num > 0) {
    if (num >= 1000) {
      result.push('M');
      num -= 1000;
    } else if (num >= 900) {
      result.push('CM');
      num -= 900
    } else if (num >= 500) {
      result.push('D');
      num -= 500;
    }  else if (num >= 400) {
      result.push('CD');
      num -= 400;
    }else if(num>=100){
      result.push('C');
      num-=100;
    }else if(num>=90){
      result.push('XC');
      num-=90;
    }else if(num>=50){
      result.push('L');
      num-=50;
    }else if(num>=40){
      result.push('XL');
      num-=40;
    }else if(num>=10){
      result.push('X');
      num-=10;
    }else if(num>=9){
      result.push('IX');
      num-=9;
    }else if(num>=5){
      result.push('V');
      num-=5;
    }else if(num>=4){
      result.push('IV');
      num-=4;
    }else if(num>=1){
      result.push('I');
      num-=1;
    }


  }

  return result.join('');
};
