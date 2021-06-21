/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */

var spiralOrder = function (matrix) {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let columnStart = 0;
  let columnEnd = matrix[0].length - 1;

  const spiralMatrix = [];

  while (rowEnd >= rowStart && columnEnd >= columnStart) {
    for (i = columnStart; i <= columnEnd; i++) {
      spiralMatrix.push(matrix[rowStart][i]);
    }

    rowStart++;

    if (rowEnd >= rowStart) {
      for (let i = rowStart; i <= rowEnd; i++) {
        spiralMatrix.push(matrix[i][columnEnd]);
      }
    }

    columnEnd--;

    if (rowEnd >= rowStart) {
      for (i = columnEnd; i >= columnStart; i--) {
        spiralMatrix.push(matrix[rowEnd][i]);
      }
    }

    rowEnd--;

    if (columnEnd >= columnStart) {
      for (let i = rowEnd; i >= rowStart; i--) {
        spiralMatrix.push(matrix[i][columnStart]);
      }
    }

    columnStart++;
  }

  return spiralMatrix;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));

/**
 * Sample inputs
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
