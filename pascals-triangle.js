/**
 * Pascal's Triangle
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *  
 * 
 * Constraints:
 * 1 <= numRows <= 30
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = rows => {
    if (rows.length === numRows) {
      return rows;
    }

    const parentRow = [0, ...rows[rows.length - 1], 0];
    const currentRow = [];

    for (let i = 0; i < parentRow.length - 1; i++) {
      currentRow.push(parentRow[i] + parentRow[i + 1]);
    }

    return triangle([...rows, currentRow]);
  }

  return triangle([[1]]);
};

console.log(generate(30));