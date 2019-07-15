'use strict';

//Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power,
// so powerN(3, 2) is 9 (3 squared).



function numberOnPower(basenumber: number, powerNumber: number): number {
    let baseNumber: number;
    let powerNumber: number;
    let result: number = baseNumber;
    if (powerNumber = 1) {
        return result;
    } else {
        result = baseNumber * numberOnPower(baseNumber, powerNumber - 1);
    }
    return result;
}


console.log(numberOnPower(3, 4));


