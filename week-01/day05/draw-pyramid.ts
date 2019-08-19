'use strict';
let lineCount: number = 6;

let line: string = '';
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


for (let row: number = 1; row <= lineCount; row++) {
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
