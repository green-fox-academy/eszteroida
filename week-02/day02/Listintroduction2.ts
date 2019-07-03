'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB = listA

//Print out whether List A contains Durian or not

//Remove Durian from List B
listB.splice(3, 1);

console.log(listB);

//Add Kiwifruit to List A after the 4th element

listA.push('Kiwifruit', 3);

console.log(listA);

//Compare the size of List A and List B
//Get the index of Avocado from List A
//Get the index of Durian from List B
//Add Passion Fruit and Pomelo to List B in a single statement
//Print out the 3rd element from List A