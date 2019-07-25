'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(array: string[]): string {
    array.splice(array.indexOf('do'), 1, 'cannot');
    array.splice(array.lastIndexOf('cannot'), 1, 'do');
    return array.join(" ");
}
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

// without function:

// words.splice(words.indexOf('do'), 1, 'cannot');
// words.splice(words.lastIndexOf('cannot'), 1, 'do');
// ??
// console.log(words);

export = quoteSwap;