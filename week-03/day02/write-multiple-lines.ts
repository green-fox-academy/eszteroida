'use strict';
declare function require(path: string): any;
export { };

const fs = require('fs');

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

let pathToWrite: string = '/Users/eszteroida/eszter_h/week-03/day02/my-file.txt';
let wordToWrite: string = 'apple';
let writeInNewLine: string = '\n';
let numberToWrite: number = 5;
let content;

try {
    content = fs.readFileSync(pathToWrite, 'utf-8');
    for (let i: number = 1; i <= numberToWrite; i++) {
    fs.appendFileSync(pathToWrite, writeInNewLine + wordToWrite);
    }

} catch (e) {
    content = "Unable to write file the file you selected";
}
console.log(content);
