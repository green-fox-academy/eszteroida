'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let placeToDraw: string = '';
let lineNumber: number = 8;

for (let i: number = 1; i <= lineNumber; i++) {
    for (let j: number = 1; j <= lineNumber; j++) {

        if (i % 2 === 0 && j % 2 === 0) {
            placeToDraw += '%';
        } else if (i % 2 === 1 && j % 2 === 1) {
            placeToDraw += '%';
        } else {
            placeToDraw += ' ';
        }
    } console.log(placeToDraw);
    placeToDraw = '';
} 