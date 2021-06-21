/**
 * Given two strings s and t, check if s is a subsequence of t.
 *
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative
 * positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s) {
    return true;
  }

  const subStringArr = s.split('');

  for (let i = 0; i < t.length; i++) {
    if (subStringArr[0] === t[i]) {
      subStringArr.shift();
    }

    if (subStringArr.length === 0) {
      return true;
    }
  }

  return false;
};

console.log(isSubsequence('', ''));

/**
 * Sample code
 *
 * Example 1:
 *
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * Example 2:
 *
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 */
