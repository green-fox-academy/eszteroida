'use strict'
import Waiter from './waiter';
import Chef from './chef';
import Manager from './manager';

// - It should have a method `guests arrived` which should instruct all employees to `work`
// - We should be able to `hire` an employee which will add it to the list of `employees`

class Restaurant {
    name: string;
    yearOfFoundation: number;
    employeeList: (Waiter | Chef | Manager)[];
    // also good : employeeList: Employee[];

    constructor(name: string, yearOfFoundation: number) {
        this.name = name;
        this.yearOfFoundation = yearOfFoundation;
        this.employeeList = [];
    }

    guestsArrived(): void {
        if (this.employeeList.length > 0) {
            this.employeeList.forEach(function (element) {
                element.work();
            })
        }
    }

    hireEmployee(employee: Waiter | Chef | Manager): void {
        this.employeeList.push(employee);
    }
}

let nobu: Restaurant = new Restaurant('Nobu', 2005);
console.log(nobu);

let chef1: Chef = new Chef('Lali', 4);
nobu.hireEmployee(chef1);
nobu.guestsArrived();
console.log(nobu);

