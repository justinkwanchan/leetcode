// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const numsAbsolute = nums.map(num => Math.abs(num));
  const minIndex = numsAbsolute.indexOf(Math.min(...numsAbsolute));

  let i = minIndex - 1;
  let j = minIndex + 1;
  const squares = [Math.pow(numsAbsolute[minIndex], 2)];

  while (i >= 0 || j < numsAbsolute.length) {
    if (i < 0) {
      squares.push(Math.pow(numsAbsolute[j++], 2));
      continue;
    }

    if (j >= numsAbsolute.length || numsAbsolute[i] < numsAbsolute[j]) {
      squares.push(Math.pow(numsAbsolute[i--], 2));
      continue;
    }

    squares.push(Math.pow(numsAbsolute[j++], 2));
  }

  return squares;
};

console.log(sortedSquares([-7]));
