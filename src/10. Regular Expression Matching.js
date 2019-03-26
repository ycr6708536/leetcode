/**
 * Implement regular expression matching with support for '.' and '*'.
 * 
 * https://leetcode.com/problems/regular-expression-matching/description/
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!s || !p) { //参数为空
    // 正则为空
    if (p != '' && !s) {
      var dp = [true];
      for (var i = 0; i <= p.length; i++) {
        if (p[i] == '*' && dp[i - 1]) {
          dp[i + 1] = true;
        }
      }
      return !!dp[p.length]
    } else if (!s && !p) {
      // 都为空
      return true;
    } else {
      return false;
    }
  }

  var dp = [];
  for (var i = 0; i <= s.length; i++) {
    dp[i] = [];
    for (var j = 0; j <= p.length; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;
  for (i = 0; i < p.length; i++) {
    if (p[i] == '*' && dp[0][i - 1]) {
      dp[0][i + 1] = true;
    }
  }

  for (i = 0; i < s.length; i++) {
    for (var j = 0; j < p.length; j++) {
      if (p[j] == '.' || p[j] == s[i]) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p[j] == '*') {
        if (p[j - 1] != s[i] && p[j - 1] != '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
        }
      }
    }
  }
  return dp[s.length][p.length];
};

console.log(isMatch('', '.*'));
