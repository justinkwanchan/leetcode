// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

// Input: ratings = [1,2,3] => [1,2,3]
// Output: 6

// Input: ratings = [3,2,1] => [3,2,1]
// Output: 6

// Constraints:

// n == ratings.length
// 1 <= n <= 2 * 104
// 0 <= ratings[i] <= 2 * 104

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candy = [...Array(ratings.length)].map(() => 1);

  const growBack = i => {
    candy[i]++;

    if (ratings[i - 1] > ratings[i] && candy[i - 1] <= candy[i]) {
      growBack(i - 1);
    }
  };

  ratings.forEach((rating, i) => {
    if (rating > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }

    if (rating < ratings[i - 1] && candy[i - 1] <= candy[i]) {
      growBack(i - 1);
    }
  });

  return candy.reduce((acc, cur) => acc + cur, 0);
};

module.exports = candy;
