'use strict';

//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addUpToNumber(upToNumber: number) {
    if (upToNumber === 1) {
        return 1;
    } else {
        return upToNumber + addUpToNumber(upToNumber - 1);
    }
}
console.log(addUpToNumber(10));
