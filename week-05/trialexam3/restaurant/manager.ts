'use strict'
import Employee from './employee';

class Manager extends Employee {
    moodLevel: number;
    constructor(name: string, experience?: number) {
        super(name, experience)
        this.moodLevel = 400;
    }

    haveAMeeting() {
        this.moodLevel -= this.experience;
    }
    work() {
        this.experience++;
        this.haveAMeeting();
    }

}

let bibi: Manager = new Manager('Bibi', 10)
bibi.work();
console.log(bibi);
bibi.haveAMeeting();
console.log(bibi);

export default Manager;