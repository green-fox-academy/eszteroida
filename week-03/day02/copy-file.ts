'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
let originalFile: string = '/Users/eszteroida/eszter_h/week-03/day02/my-file.txt';
let newFile: string = 'newfile.txt';
let content;

try {
    content = fs.readFileSync(originalFile, 'utf-8');
    fs.copyFileSync(originalFile, newFile)
    console.log(true);

} catch (e) {
    content = false;
}
console.log(content);
