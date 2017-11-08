/**
 
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
https://leetcode.com/problems/longest-palindromic-substring/description/
 */

 // var longestPalindrome = function(s) {
//   var arr = s.split('');
//   var max=0;
//   var start;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i; j < arr.length; j++) {
//       var t1, t2;
//       for (t1 = i, t2 = j; t1 < t2; t1++, t2--) {
//         if (arr[t1] != arr[t2]) break;
//       }
//       if(t1>=t2 && j-i>=max){
//         max = j-i+1;
//         start = i;
//       }
//     }
//   }

//   if(max)return s.substr(start,max);

//   return '';
// };

var longestPalindrome = function(s) {
  if (s.length == 1) return s;
  var arr = s.split('');
  var max = 0,
    length = arr.length;
  var start;
  for (var i = 0; i < length; i++) {
    var l = i - 1,
      r = i + 1;
    while (l >= 0 && r <= length && arr[l] == arr[r]) {
      if (r - l + 1 > max) {
        max = r - l + 1;
        start = l;
      }
      l--;
      r++;
    }
  }
  
  for (var i = 0; i < length; i++) {
    var l = i,
      r = i + 1;
    while (l >= 0 && r <= length && arr[l] == arr[r]) {
      if (r - l + 1 > max) {
        max = r - l + 1;
        start = l;
      }
      l--;
      r++;
    }
  }


  if (max) return s.substr(start, max);

  return arr[0] || '';
};

// longestPalindrome('cbbd')
