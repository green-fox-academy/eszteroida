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
    constructor(name?: string, age?: number, gender?: string) {
        this.name = name || 'Jane Doe';
        this.age = age || 30;
        this.gender = gender || 'female';
    }
}

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number = 0;

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }
    getGoal() {
        console.log("Be a junior software developer.");
    }
    skipDays(numberOfDays) {
        this.skippedDays += numberOfDays;
    }
    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        this.name = name || 'Jane Doe';
        this.age = age || 30;
        this.gender = gender || 'female';
        this.previousOrganization = previousOrganization || 'The School of Life';
        this.skippedDays = 0;
    }
}

class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor`);
    }
    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }
    constructor(name?: string, age?: number, gender?: string, level?: string) {
        this.name = name || 'Jane Doe';
        this.age = age || 30;
        this.gender = gender || 'female';
        this.level = level || 'intermediate';
    }
}
class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number = 0;

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }
    getGoal() {
        console.log("Hire brilliant junior software developers.");
    }
    hire() {
        this.hiredStudents++;
    }
    constructor(name?: string, age?: number, gender?: string, company?: string) {
        this.name = name || 'Jane Doe';
        this.age = age || 30;
        this.gender = gender || 'female';
        this.company = company || 'Google';
        this.hiredStudents = 0;
    }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

for (let person of people) {
    person.introduce();
    person.getGoal();
}