'use strict';
declare function require(path: string): any;
export { };

const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let manipulated = '\n Eszteroida';

let content;

try {
    content = fs.readFileSync('my-file.txt', 'utf-8');
    content = content + manipulated;

} catch (e) {
    content = "Unable to write file: my-file.txt";
}
console.log(content);


