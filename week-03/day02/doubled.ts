'use strict'
// Create a method that decrypts duplicated-chars.txt
declare function require(path: string): any;
const fs = require('fs');
let fileContent: string;

try {
    fileContent = fs.readFileSync('duplicated-chars.txt', 'utf-8');
    console.log(decrypt(fileContent));
} catch (e) {
    console.log(e.message);
}

function decrypt(filecontent: string) {

    
}