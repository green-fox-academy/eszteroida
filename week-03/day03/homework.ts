'use strict';
// Create 5 trees
// Store the data of them in variables in your program
// for every tree the program should store its'
// - type
// - leaf color
// - age
// - sex
// you can use just variables, or lists and/or maps

class tree {
    treeType: string;
    leafcolour: string;
    age: number;
    sex: string;
    constructor(treeType: string, leafcolour: string, age: number, sex: string) {
        this.treeType = treeType;
        this.leafcolour = leafcolour;
        this.age = age;
        this.sex = sex;
    }
}
let tree1 = new tree('pine', 'darkgreen', 3, 'M');
let tree2 = new tree('willow', 'green', 5, 'F');
let tree3 = new tree('cherry', 'lightgreen', 8, 'F');
let tree4 = new tree('oak', 'yellow', 11, 'M');
let tree5 = new tree('maple', 'red', 9, 'M');

console.log(tree3);