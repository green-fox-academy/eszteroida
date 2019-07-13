'use strict';

// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.

let shoppingList: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"];

//Do we have milk on the list?
let doWeHaveMilk = function (arr): boolean {
    return arr.includes("milk");
}
console.log(doWeHaveMilk(shoppingList));

//Do we have bananas on the list?
let doWeHaveBananas = function (arr): boolean {
    return arr.includes("bananas");
}
console.log(doWeHaveBananas(shoppingList));
