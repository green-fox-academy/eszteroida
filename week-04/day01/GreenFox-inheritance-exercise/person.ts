'use strict'

class Person {
    name: string;
    age: number;
    gender: string;

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
    }
    getGoal() {
        console.log("My goal is: Live for the moment.");
    }
    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

export default Person;