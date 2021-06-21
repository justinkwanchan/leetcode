/**
 * Given a 2D integer array matrix, return the transpose of matrix.
 * The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 1000
 * 1 <= m * n <= 105
 * -109 <= matrix[i][j] <= 109
 */

var transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const transpose = [];

  for (let i = 0; i < n; i++) {
    transpose.push([]);

    for (let j = 0; j < m; j++) {
      transpose[i].push(matrix[j][i]);
    }
  }

  return transpose;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(transpose(matrix));

/**
 * Sample inputs
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 
 * Input: matrix = [[1,2,3],[4,5,6]]
 * Output: [[1,4],[2,5],[3,6]]
 */
