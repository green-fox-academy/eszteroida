'use strict'
// Write a method which can read and parse a file containing information about
// weather in various cities. The method must return the name of the city which
// had the most rainy days.

declare function require(path: string): any;
export { };

const fs = require('fs');

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

function getRainyCities(filename: string): string[] {
    let lines: string[] = getLines(filename);
    let rainyLines: string[] = [];
    for (let i: number = 0; i < lines.length; i++) {
        if (lines[i].endsWith('RAINY')) {
            rainyLines.push(lines[i]);
        }
    }
    let rainyCities: string[] = rainyLines.map(function (element) {
        return element.split(',')[1];
    });
    return rainyCities;
}

function getCitiesCount(filename: string): object {
    let rainyCities: string[] = getRainyCities(filename);
    let citiesCount: object = {};
    for (let i: number = 0; i < rainyCities.length; i++) {
        if (!citiesCount[rainyCities[i]]) {
            citiesCount[rainyCities[i]] = 0;
        }
        citiesCount[rainyCities[i]] += 1;
    }
    return citiesCount;
}

function getMostRainy(filename: string): string {
    let citiesToCount: object = getCitiesCount(filename);
    let biggestKey: string = Object.keys(citiesToCount)[0];

    for (let i in citiesToCount) {
        if (citiesToCount[i] > citiesToCount[biggestKey]) {
            biggestKey = i;
            return (`The most rainy city is ${biggestKey}`);
        }
    }
}

console.log(getMostRainy('rainy-days.txt'));
