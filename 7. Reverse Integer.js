/**
 Given a 32-bit signed integer, reverse digits of an integer.
 https://leetcode.com/problems/reverse-integer/description/
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
  var a = x.toString();
  var p ='';
  if(a[0]=='-'){
      p='-';
      a = a.substring(1);
  }
  a = a.split('');
  a.reverse();
  p+=a.join('');
  
  p = +p;
  if(p<-2147483648||p>2147483647)return 0;
  return +p;
};