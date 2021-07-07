// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const first = strs[0];
  let prefix = '';

  if (!first) return '';

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== letter) return prefix;
    }

    prefix += first[i];
  }

  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
