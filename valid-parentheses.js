// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parenStack = [];
  const parentheses = ['(', '[', '{', ')', ']', '}'];

  for (const paren of s) {
    if (parenStack.length === 0 || parentheses.indexOf(paren) < 3) {
      parenStack.push(paren);
      continue;
    }

    const popped = parenStack.pop();
    if (parentheses.indexOf(popped) + 3 !== parentheses.indexOf(paren)) {
      return false;
    }
  }

  if (parenStack.length !== 0) {
    return false;
  }

  return true;
};

console.log(isValid('({[{}]}'));
