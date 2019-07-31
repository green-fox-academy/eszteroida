"use strict";
// Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) as parameter
//  and returns a matrix which elements are rotated 90 degrees clockwise.

let exampleMatrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rotateMatrix(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[j][i]);
        } newMatrix.push(row);
    } return newMatrix;
}

console.log(rotateMatrix(exampleMatrix));
