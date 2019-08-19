'use strict';
let lineCount: number = 7;
// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let row: number = 1; row <= (lineCount + 1) / 2; row++) {
    let spaceToDraw: string = '';
    let starToDraw: string = '';
    for (let space: number = 1; space <= (lineCount - row); space++) {
        spaceToDraw += ' ';
    }
    for (let star: number = 1; star <= 2 * row - 1; star++) {
        starToDraw += '*';
    }
    console.log(spaceToDraw, starToDraw);
}

for (let row: number = 1; row <= (lineCount - 1) / 2; row++){
    let spaceToDraw: string = '';
    let starToDraw: string = '';
    for (let space :number = 1; space <= (lineCount - 1) / 2; space++) {
        spaceToDraw += ' ';
    }
    for (let star: number = 2 * row - 1; star <= 1; star--) {
        starToDraw = '*';
    }   
    console.log(spaceToDraw, starToDraw);
}