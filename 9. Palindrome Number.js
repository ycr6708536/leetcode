/*

Determine whether an integer is a palindrome. Do this without extra space.
https://leetcode.com/problems/palindrome-number/description/
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let s = x.toString().split('').join('#');
  
  let mid = Math.floor(s.length / 2),
      l=s.length;
  let r =true;
  for(let i=0;i<mid;i++){
      if(s[i]!==s[l-i-1]){
          r=false;
          break;
      }
  }
  return r;
};