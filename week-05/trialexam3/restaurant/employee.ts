'use strict'

abstract class Employee {
    name: string;
    experience: number;
    constructor(name: string, experience?: number) {
        this.name = name;
        if (experience) {
            this.experience = experience;
        } else {this.experience = 0};
    }

    work() {
    }
}

export default Employee;