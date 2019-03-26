/**
 * 
 * Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.


https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 * 
 *  

17. Letter Combinations of a Phone Number
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let letter = {
    0: [''],
    1: [' '],
    2: 'abc'.split(''),
    3: 'def'.split(''),
    4: 'ghi'.split(''),
    5: 'jkl'.split(''),
    6: 'mno'.split(''),
    7: 'pqrs'.split(''),
    8: 'tuv'.split(''),
    9: 'wxyz'.split(''),
  };

  let r=[];
  for(var i =0;i<digits.length;i++){
    if(i==0){
      r = letter[digits[i]];
    }else{
      let t = [];
      for(let j=0;j<letter[digits[i]].length;j++){
        for(let k=0;k<r.length;k++){
          t.push(r[k]+letter[digits[i]][j]);
        }
      }
      r = t;
    }
  }

  return r;
};
