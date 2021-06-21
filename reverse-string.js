/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

const reverseString = s => s.reverse();

// console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
// console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));

const reverseStringMutable = s => {
  for (let i = s.length - 2; i >= 0; i--) {
    s.push(s[i]);
    s.splice(i, 1);
  }
};

const s1 = ['h', 'e', 'l', 'l', 'o'];
const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];

reverseString(s1);
reverseString(s2);

console.log(s1);
console.log(s2);

// Sample Code

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
