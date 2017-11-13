/*
Implement regular expression matching with support for '.' and '*'.

https://leetcode.com/problems/regular-expression-matching/
*/


var isMatch = function(s, p) {
  let sl = s.length,
    pl = p.length,
    i = 0,
    j = 0;
let tpl =p.replace(/\*/g,'').length;
if(tpl>sl+pl-tpl)return false;  
  if (p[0] === '*') return false;

  while (i < sl && j < pl) {
    if (p[j] === '.') {
      if (p[j + 1] === '*') {
        j += 2;
        if (j < pl) {
          let tem = s.substr(i);
          let index = tem.indexOf(p[j]);
          if (index < 0) {
            i = 0;
            break;
          } else {
            i = i + index + 1;
            j += 1;
          }
        } else {
          i = sl;
        }

      } else {
        i++;
        j++;
      }
    } else if (s[i] === p[j]) {
      i++;
      j++;
    } else if (p[j] === '*') {
      if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
        j++;
      } else {
        i++;
      }
    } else {
      if(p[++j]==='*'){
        j++;
        i++;
      }else{
        i = 0;
      }
    }
  }

  return i === sl
};

// 
// IsMatch("aaa","ab*a") false WHY ???
console.log(isMatch('aaa', 'ab*ac*a'))
