// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  let sum = '';
  let carry = false;
  const aLength = a.length;
  const bLength = b.length;
  let i = 1;

  for (; i <= aLength; i++) {
    if (!b[bLength - i] || b[bLength - i] === '0') {
      if (carry) {
        if (a[aLength - i] === '0') {
          sum = '1' + sum;
          carry = false;
        } else {
          sum = '0' + sum;
        }
      } else {
        if (a[aLength - i] === '0') {
          sum = '0' + sum;
        } else {
          sum = '1' + sum;
        }

        carry = false;
      }
    } else {
      if (carry) {
        if (a[aLength - i] === '0') {
          sum = '0' + sum;
        } else {
          sum = '1' + sum;
        }
      } else {
        if (a[aLength - i] === '0') {
          sum = '1' + sum;
        } else {
          sum = '0' + sum;
          carry = true;
        }
      }
    }
  }

  for (; i <= bLength; i++) {
    if (carry) {
      if (b[bLength - i] === '0') {
        sum = '1' + sum;
        carry = false;
      } else {
        sum = '0' + sum;
      }
    } else {
      sum = b[bLength - i] + sum;
    }
  }

  if (carry) {
    sum = '1' + sum;
  }

  return sum;
};

const a = '11';
const b = '1';
console.log(addBinary(a, b));

// 1 + 1 = 10
// 0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111
