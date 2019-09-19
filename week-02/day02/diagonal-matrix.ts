'use strict'

//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0

let matrix: number[][] = [];
let numberOfRows: number = 6;

for (let i: number = 0; i <= numberOfRows - 1; i++) {
    let row: number[] = [];
    for (let j: number = 0; j <= numberOfRows - 1; j++) {
        if (i + j == numberOfRows -1) {
            row.push(1);
        } else {
            row.push(0);
        }
    }
    matrix.push(row);
}

console.log(matrix);