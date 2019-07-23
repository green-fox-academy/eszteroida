'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let stars: string = '';

for (let i: number = 1; i <= lineCount; i++) {
    stars += '*';
    console.log(stars);

}

// for (let i = 0; i < lineCount; i++) {
//     console.log(star += '*');
// }