'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
let toDraw: string = '';

for (let i: number = 1; i <= lineCount; i++) {
    for (let j: number = 1; j <= lineCount; j++) {
        if (i === 1 || i === lineCount) {
            toDraw += '%';

        } else if (j === 1 || j === lineCount) {
            toDraw += '%';

        } else if (i === j) {
                toDraw += '%';

            } else {
                toDraw += ' ';

            }

    }
    console.log(toDraw);
    toDraw = '';
}