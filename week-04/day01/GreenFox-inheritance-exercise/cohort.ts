'use strict'
import Student from './student';
import Mentor from './mentor';

class Cohort {
    name: string;
    listOfStudents: Student[];
    listOfMentors: Mentor[];

    constructor(name: string, listOfStudents: Student[] = [], listOfMentors: Mentor[] = []) {
        this.name = name;
        this.listOfStudents = listOfStudents;
        this.listOfMentors = listOfMentors;
    }

    addStudent(student : Student) {
        this.listOfStudents.push(student);
    }

    addMentor(mentor: Mentor) {
        this.listOfMentors.push(mentor);
    }

    info() {
    console.log(`The ${this.name} cohort has ${this.listOfStudents.length} students and ${this.listOfMentors.length} mentors.`);
    }
}


export default Cohort;