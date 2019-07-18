'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 5;
let matrix: any[] = [];

for (let r: number = 0; r < size; r++) {
    let row: number[] = [];
    for (let c: number = 0; c < size; c++) {
        if (r + c == size - 1) {
            row.push(1);
        } else {
            row.push(0);
        }
    }
    matrix.push(row);
}
matrix.forEach(function (r) {
    console.log(r);
});

