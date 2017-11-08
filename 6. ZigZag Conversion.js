/**
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

https://leetcode.com/problems/zigzag-conversion/description/
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) return s;
  // if(s.length<=numRows) return s;
  var arr = s.split('');
  var r = '';
  var f = 1;
  var len = s.length;
  for (var i = 0; i < numRows; i++) {
    var s1 = 2 * (numRows - i - 1);
    var s2 = 2 * i;
    var start = i;

    if (start < len) r += arr[start];
    while (true) {
      start += s1;

      if (start >= len) break;
      if (s1) r += arr[start];
      start += s2;
      if (start >= len) break;
      if (s2) r += arr[start];
    }
  }
  return r;
};