'use strict';
let getIndex = require('./getIndex');
let test = require("tape");
// Create a function that takes a list and a value, and returns the index of that value in the list. 
// If the value is not it the list, the function should return -1.

test('main test - negative', t => {
    let list1 = [1, 2, 3];
    let value1 = 4;
    t.equals(getIndex(list1, value1), -1);
    t.end()
});

test('main test positive', t => {
    let list2 = [4, 5, 6];
    let value2 = 5;
    t.equals(getIndex(list2, value2), 1);
    t.end()
});
