/**
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 * Example 1:
 *
 * Input:
 * [[0,0,0],
 *  [0,1,0],
 *  [0,0,0]]
 *
 * Output:
 * [[0,0,0],
 *  [0,1,0],
 *  [0,0,0]]
 * Example 2:
 *
 * Input:
 * [[0,0,0],
 *  [0,1,0],
 *  [1,1,1]]
 *
 * Output:
 * [[0,0,0],
 *  [0,1,0],
 *  [1,2,1]]
 *
 *
 * Note:
 *
 * The number of elements of the given matrix will not exceed 10,000.
 * There are at least one 0 in the given matrix.
 * The cells are adjacent in only four directions: up, down, left and right.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const zeroCoords = [];
  const zeroDistanceMatrix = [];

  for (const i in matrix) {
    zeroDistanceMatrix.push([]);

    for (const j in matrix[i]) {
      zeroDistanceMatrix[i].push(0);

      if (matrix[i][j] === 0) {
        zeroCoords.push([i, j]);
      }
    }
  }

  for (const i in matrix) {
    for (const j in matrix[i]) {
      if (matrix[i][j] !== 0) {
        minDistance =
          Math.abs(i - zeroCoords[0][0]) + Math.abs(j - zeroCoords[0][1]);

        for (const zero of zeroCoords) {
          const currentDistance = Math.abs(i - zero[0]) + Math.abs(j - zero[1]);

          if (currentDistance < minDistance) {
            minDistance = currentDistance;
          }
        }

        zeroDistanceMatrix[i][j] = minDistance;
      }
    }
  }

  return zeroDistanceMatrix;
};

const array1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

const array2 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(array2));
