'use strict';
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
let testList : number [] = [34, 12, 24, 9, 5];

function sorting(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

function bubble(array: number[]) {
    return array.sort(sorting);
}
function advancedBubble(array: number[], boolean) {
    if (boolean = true) {
        array.sort(sorting);
        return array.reverse();
    } else {
        return array.sort(sorting);
    }
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]