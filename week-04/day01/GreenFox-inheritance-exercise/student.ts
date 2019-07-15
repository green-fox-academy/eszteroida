'use strict'
import Person from './person';

class Student extends Person {
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
    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }
}

export default Student;