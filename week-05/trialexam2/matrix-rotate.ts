"use strict";

let exampleMatrix: number[][] = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
let exampleMatrix2: number[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

function matrix(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix.length; j++) {
            row.push(matrix[i][j]);
        } newMatrix.push(row);
    } return newMatrix;
}
function rotateMatrix90Left(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[j][i]);
        } newMatrix.push(row);
    } return newMatrix;
}

function rotateMatrix90Right(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = matrix.length - 1; i >= 0; i--) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        } newMatrix.push(row);
    } return newMatrix;
}


function flipMatrixHorizontal(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[i][j]);
        } newMatrix.push(row);
    } return newMatrix;
}

function flipMatrixVertical(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = matrix.length - 1; i >= 0; i--) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix.length; j++) {
            row.push(matrix[i][j]);
        } newMatrix.push(row);
    } return newMatrix;
}

function rotateMatrix180(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = matrix.length - 1; i >= 0; i--) {
        let row: number[] = [];
        for (let j: number = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[i][j]);
        } newMatrix.push(row);
    } return newMatrix;
}

function flipMatrixSlash(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = matrix.length - 1; i >= 0; i--) {
        let row: number[] = [];
        for (let j: number = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[j][i]);
        } newMatrix.push(row);
    } return newMatrix;
}

function flipMatrixBackslash(matrix): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        } newMatrix.push(row);
    } return newMatrix;
}

console.log(exampleMatrix);
console.log(matrix(exampleMatrix));
console.log(rotateMatrix90Left(exampleMatrix));
console.log(rotateMatrix90Right(exampleMatrix));
console.log(flipMatrixHorizontal(exampleMatrix));
console.log(flipMatrixVertical(exampleMatrix));
console.log(rotateMatrix180(exampleMatrix));
console.log(flipMatrixSlash(exampleMatrix));
console.log(flipMatrixBackslash(exampleMatrix));