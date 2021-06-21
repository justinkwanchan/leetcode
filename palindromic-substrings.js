/**
 * Given a string, your task is to count how many palindromic substrings in this string.
 *
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let palindromeCount = s.length;

  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j < s.length - i + 1; j++) {
      const substring = s.slice(j, i + j);

      if (substring === substring.split('').reverse().join('')) {
        palindromeCount++;
      }
    }
  }

  return palindromeCount;
};

console.log(countSubstrings('aaa'));

/**
 * Example 1:
 *
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 *
 *
 * Example 2:
 *
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */
