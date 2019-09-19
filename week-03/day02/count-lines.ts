'use strict';
declare function require(path: string): any;
export { };

const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let content;
try {
    content = fs.readFileSync('my-file.txt', 'utf-8');
    let lines: string[] = content.split('n');
    console.log(lines.length);

} catch (e) {
    console.log('0');
}

