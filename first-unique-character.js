/**
 * Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
 *
 * Constraints:
 *
 * 1 <= s.length <= 105
 * s consists of only lowercase English letters.
 *
 * Example 1:
 *
 * Input: s = "leetcode"
 * Output: 0
 * Example 2:
 *
 * Input: s = "loveleetcode"
 * Output: 2
 * Example 3:
 *
 * Input: s = "aabb"
 * Output: -1
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let index = 0;
  const letters = new Set();

  while (index < s.length) {
    if (letters.has(s[index])) {
      index++;
      continue;
    }

    if (s.slice(index + 1).includes(s[index])) {
      letters.add(s[index++]);
      continue;
    }

    return index;
  }

  return -1;
};

console.log(firstUniqChar('loveleetcode'));
