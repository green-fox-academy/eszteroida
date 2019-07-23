'use strict';
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr) {
    arr.sort();
    for (let i: number = 0; i <= arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);
        }
    } return arr;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`