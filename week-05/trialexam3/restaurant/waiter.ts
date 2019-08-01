'use strict'
import Employee from './employee';

class Waiter extends Employee {
    tipsAmount: number = 0;
    constructor(name: string, experience?: number) {
        super(name, experience)
    }
    work(): void {
        this.tipsAmount++;
        this.experience++;
    }
}
let jónás: Waiter = new Waiter('Jónás');

jónás.work();
console.log(jónás);

export default Waiter;