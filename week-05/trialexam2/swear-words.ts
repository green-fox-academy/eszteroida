'use strict'
// Write a method which can read and parse a file containing not so family friendly text. 
// The method must remove all the given words from the file and return the amount of the removed words.

declare function require(path: string): any;
export { };
const fs = require('fs');
let content : string = fs.readFileSync('countchars.txt', 'utf-8');
let inputWords: string [] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

function removeUnfriendlyWords (fileName) {
let friendlyText;

//////////////////////

    return friendlyText;
}


​
const swearWords: string[] = [
  "fuck",
  "bloody",
  "cock",
  "shit",
  "fucker",
  "fuckstick",
  "asshole",
  "dick",
  "piss",
  "cunt"
];
​
const countCsunyaWords = (text: string, swearWords: string[]): number => {
  const words: string[] = text.split(" ");
  let notSoNiceWords: string[] = [];
  let niceWords: string[] = [];
​
  for (let word of words) {
    let withOutLastChar: string = word.substring(0, word.length - 1);
    if (swearWords.indexOf(word) >= 0) {
      notSoNiceWords.push(word);
    } else if (swearWords.indexOf(withOutLastChar) >= 0) {
      notSoNiceWords.push(withOutLastChar);
      niceWords.push(word.charAt(word.length - 1));
    } else {
      niceWords.push(word);
    }
  }
  fs.writeFileSync("b.txt", niceWords.join(" "));
  return notSoNiceWords.length;
};
​
console.log(countCsunyaWords(content, swearWords));