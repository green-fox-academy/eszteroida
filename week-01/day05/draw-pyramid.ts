'use strict';
let lineCount: number = 4;
let spaceToDraw: string = '';
let starToDraw: string = '*';
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
    for (let column: number = 1; column <= lineCount; column++) {
        spaceToDraw += ' ';
        starToDraw += '*';



    }

    console.log(starToDraw);

}
