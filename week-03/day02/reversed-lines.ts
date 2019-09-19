'use strict'
// declare function require(path: string): any;
const fs = require('fs');

// Create a method that decrypts reversed-lines.txt

let content: string;

function readFile(filename: string): string {
    try {
        content = fs.readFileSync(filename, 'utf-8');
    } catch (e) {
        console.log('Unable to open');
        content = '';
    }
    return content;
}

function getLines(filename: string): string[] {
    let lines: string[];
    lines = readFile(filename).split('\n');

    let reverseLines: string[] = lines.map(function (element) {
      return element.split('').reverse().join('');
    });
    return reverseLines;
}



console.log(getLines('reversed-lines.txt'));