/**
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


function unique3(_arr) {
  var arr = _arr.slice(0);
  arr.sort();
  var re = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== re[re.length - 1]) {
      re.push(arr[i]);
    }
  }
  return re;
}
var lengthOfLongestSubstring = function(s) {
  var arr = s.split('');
  var max = 0;
  var long = [],
    l = arr.length,
    i = j = 0;

  while (i < l && j < l) {
    long.push(arr[j]);
    var ll = unique3(long).length;

    if (ll < long.length) {
      long.shift();
      i++;
    } else {

      max = long.length > max ? long.length : max;
    }
    j++;
  }

  return max;
};
