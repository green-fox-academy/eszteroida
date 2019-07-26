'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

function candiesCount(list: any[]): void {
    let sum: number = 0;
    list.forEach(function (element, candies) {
        sum += element.candies;
    });
    console.log(sum);
}
candiesCount(students);

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function sumOfAge(list: any[]): number {
    let ages: number = 0;
    list.filter(function (name, age, candies) {
        if (name.candies < 5) {
            ages += name.age;
        };
    }); return ages;
}
console.log(sumOfAge(students));