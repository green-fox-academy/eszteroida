'use strict';
let anagrams = require('./anagram');
let test = require("tape");
// Create a function that takes two strings, 
// and returns a boolean that should be True if the strings are anagrams and False otherwise.

test('main test - uppercase', t => {
    let string1 = 'Eszter';
    let string2 = 'retesz';
    t.equals(anagrams(string1, string2), true);
    t.end()
});

test('main test - negative', t => {
    let string1 = 'viktor'
    let string2 = 'retesz'
    t.equals(anagrams(string1, string2), false);
    t.end()
});

test('main test - spaces', t => {
    let string1 = 'funeral';
    let string2 = 'real fun';
    t.equals(anagrams(string1, string2), true);
    t.end()
});

test('main test - numbers', t => {
    let string1 = 'tobe';
    let string2 = '2beto';
    t.equals(anagrams(string1, string2), true);
    t.end()
});

test('main test - empty string', t => {
    let string1 = '';
    let string2 = 'anything';
    t.equals(anagrams(string1, string2), false);
    t.end()
});

test('main test - special characters', t => {
    let string1 = "McDonald's restaurants";
    let string2 = "Uncle Sam's standard rot";
    t.equals(anagrams(string1, string2), true);
    t.end()
});