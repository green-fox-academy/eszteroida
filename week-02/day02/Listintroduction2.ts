'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB = listA

//Print out whether List A contains Durian or not

listA.filter('Durian');

//Remove Durian from List B
listB.splice(3, 1);

//console.log(listB);

//Add Kiwifruit to List A after the 4th element

listA.push('Kiwifruit');
//console.log(listA);


//Compare the size of List A and List B
if (listA.length > listB.length) {
    console.log('ListA is longer');

}else {
    console.log('ListB is longer');
}

//Get the index of Avocado from List A

console.log(listA.indexOf('Avocado'));
//Get the index of Durian from List B

console.log(listB.indexOf('Durian'));

//Add Passion Fruit and Pomelo to List B in a single statement
listB.push('Passion Fruit', 'Pomelo');
console.log(listB);

//Print out the 3rd element from List A

console.log(listA[2]);

