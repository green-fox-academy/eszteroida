'use strict';
declare function require(path: string): any;
export {};

const fs = require('fs');
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
let content;
try {
    content = fs.readFileSync('my-file.txt', 'utf-8');
    
} catch(e) {
    content = 'Unable to read file: my-file.txt';
}


console.log(content);
