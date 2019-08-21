'use strict';

// Create a function that takes a list and a value, and returns the index of that value in the list. 
// If the value is not it the list, the function should return -1.

module.exports = function getIndex(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}
