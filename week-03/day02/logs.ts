'use strict';
declare function require(path: string): any;
export { };

const fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let path: string = '';

let content;

content = fs.readFileSync(path, 'utf-8');
console.log(content);