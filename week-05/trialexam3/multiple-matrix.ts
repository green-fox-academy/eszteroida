'use strict'

// The function should:
// - multiply each even number by 2 in each even indexed row
// - multiply each odd number by 2 in each odd indexed row
// ​
// Write at least 2 different test cases.

let inputExample: number[][] = [
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
];

function matrixMultiplier(matrix: number[][]): number[][] {
  for (let i: number = 0; i <= matrix.length - 1; i++) {
    for (let j: number = 0; j <= matrix.length - 1; j++) {
      if (i % 2 == 0 && (matrix[i][j]) % 2 == 0) {
        matrix[i][j] *= 2;
      } else if (i % 2 == 1 && matrix[i][j] % 2 == 1) {
        matrix[i][j] *= 2;
      }
    }
  } return matrix;
}

console.log(matrixMultiplier(inputExample));
// Output

// [
//   [1,  3,  12, 4],
//   [14, 10, 6,  2],
//   [3,  3,  1,  5],
//   [18, 0,  10, 6]
// ]