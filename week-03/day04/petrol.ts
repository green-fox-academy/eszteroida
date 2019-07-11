'use strict';
import { Car } from './car-petrol';
// Create a Station and a Car classes
//  Station
//      gasAmount
//      refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount

class Station {
    gasAmount: number = 500;
    refill(car: Car) {
        this.gasAmount = this.gasAmount - car.capacity;
        car.gasAmount = car.gasAmount + car.capacity;
    }
}

let newStation = new Station();
console.log(newStation);

let bmv = new Car();
console.log(bmv);
newStation.refill(bmv);
console.log(newStation);
console.log(bmv);

