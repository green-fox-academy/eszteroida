'use strict';
import F16 from './F16';
import F35 from './F35';
import Aircraft from './aircrafts';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

class Carrier {
    listOfAircrafts: Aircraft[];
    ammoStore: number;
    HP: number;

    constructor(ammoStore: number, HP: number) {
        this.ammoStore = ammoStore;
        this.HP = HP;
        this.listOfAircrafts = [];
    }
    add(aircraft: Aircraft): void {
        this.listOfAircrafts.push(aircraft);
    }

    fill() {
        this.listOfAircrafts.forEach(function (element) {
            if (element.isPriority() === true) {
                this.ammoStore = element.refill(this.ammoStore);
            } // nem jó
            this.ammoStore = element.refill(this.ammoStore);
        })
    }

    fight(enemy: Carrier): void {
        this.listOfAircrafts.forEach(function (element) {
            enemy.HP -= element.fight();
        })
    }
}

getStatus(): string {
    let totalDamage: number = 0;
    this.listOfAircrafts.forEach(function (element) {
        totalDamage += element.allDamage;
    })
    let summary: string = `HP: ${this.HP}, Aircraft count: ${this.listOfAircrafts.length}, Ammo storage: ${this.ammoStore}, Total damage: ${totalDamage}`;
    // let allList : string = this.listOfAircrafts.forEach(function (element) {
    //             return element.getStatus;
    //         });
    return summary
}

}
let airf: F35 = new F35();
let aircraftA: F16 = new F16();
let aircraftB: F35 = new F35();
let anyahajó: Carrier = new Carrier(345, 23);
anyahajó.add(airf);
anyahajó.add(aircraftA);
anyahajó.add(aircraftB);

console.log(anyahajó.getStatus());

