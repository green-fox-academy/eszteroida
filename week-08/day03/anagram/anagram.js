'use strict';
// Create a function that takes two strings, 
// and returns a boolean that should be True if the strings are anagrams and False otherwise.


module.exports = function anagrams(string1, string2) {

    string1 = string1.toLowerCase().replace(/[^a-z]/g, "");
    string2 = string2.toLowerCase().replace(/[^a-z]/g, "");

    let stringArray1 = string1.split('').sort().join('');
    let stringArray2 = string2.split('').sort().join('');

    if (stringArray1 !== stringArray2) {
        return false;
    }
    return true;
}
