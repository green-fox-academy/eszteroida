'use strict'

// declare function require(path: string): any;
const fs = require('fs');
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
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
    return lines;
}

function getIPAddress(filename: string): string[] {
    let lines: string[] = getLines(filename);
    let IPAddresses: string[] = lines.map(function (element) {
        return element.split('   ')[1];
    });
    return IPAddresses;
}

function selectUniqueAddresses(filename: string): string[] {
    let addresses: string[] = getIPAddress(filename);
    addresses.sort();
    let newArray: string[] = [];
    for (let i: number = 0; i <= addresses.length - 1; i++) {
        if (newArray.indexOf(addresses[i]) < 0) {
            newArray.push(addresses[i]);
        }
    }
    return newArray;
}

function getLineEnds(filename: string): string[] {
    let lines: string[] = getLines(filename);
    let lineEnds: string[] = lines.map(function (element) {
        return element.split('   ')[2];
    });
    return lineEnds;
}

function getRatio(filename: string): string {
    let lines: string[] = getLineEnds(filename);
    let lineNumbers: number = lines.length;
    let postCounter: number = 0;
    for (let i: number = 0; i <= lineNumbers; i++) {
        if (lines[i].startsWith('POST')) {
            postCounter += 1;
        }
    }

    let getCounter: number = lineNumbers - postCounter;
    // return (`The ratio of POST-s and GET-s is ${Math.floor(postCounter/100)} : ${getCounter/100}`);
    return (`The POST : GET ratio is ${postCounter} : ${getCounter}`);
}


console.log(selectUniqueAddresses('log.txt'));

//string.starts with, ends with