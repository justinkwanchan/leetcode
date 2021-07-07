// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.
// Accepted

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  let maxCount = 0;
  let count = 0;

  for (const parenthesis of s) {
    if (parenthesis === ')' && stack[stack.length - 1] === '(') {
      count += 2;

      if (count > maxCount) {
        maxCount = count;
      }

      stack.pop();
      continue;
    }

    if (parenthesis === ')') {
      count = 0;
    }

    stack.push(parenthesis);
  }

  return maxCount;
};

console.log(longestValidParentheses('()()(()))(()())'));

/**
 * ()()(()))(()())
 *
 * Failed on "()(()"
 */
