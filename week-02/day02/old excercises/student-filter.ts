'use strict';

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function gotMoreThanFour(list: any[]): void {
    list.filter(function (name, candies) {
        if (name.candies > 4) {
            console.log(name);
        }
    })
}
gotMoreThanFour(students);

// V2 ?
// function gotMoreThanFour(list: any[]) {
//     let names: string[] = [];
//     list.filter(function (name, candies) {
//         if (name.candies > 4) {
//            names.push(name.candies);
//         } return names;
//     })
// }
// console.log(gotMoreThanFour(students));

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function averageCandiesNr(list: any[]): void {
    let candiesNumber: number = 0;

    list.forEach(function (name, candies) {
        candiesNumber += name.candies;
    })
    candiesNumber = candiesNumber / list.length;
    console.log(candiesNumber);
}
averageCandiesNr(students);