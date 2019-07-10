'use strict';
// Create a PostIt a class that has
// - a backgroundColor
// - a text on it
// - a textColor
// Create a few example post-it objects:
// - an orange with blue text: "Idea 1"
// - a pink with black text: "Awesome"
// - a yellow with green text: "Superb!"

class postIt {
    backgroundColor: string;
    textOnPostIt: string;
    textColor: string;

    constructor(backgroundColor: string, textOnPostIt: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.textOnPostIt = textOnPostIt;
        this.textColor = textColor;
    }
}

let postIt1 = new postIt ('orange', 'Idea 1', 'blue');
let postIt2 = new postIt ('pink', 'Awesome', 'black');
let postIt3 = new postIt ('yellow', 'Superb!', 'green');

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);