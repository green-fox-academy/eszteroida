'use strict'

import Animal from './animals';
import Cat from './cat';
import Dog from './dog';
import Parrot from './parrot';

class Shelter {
    budget: number;
    animalList: Animal[] = [];
    potentialOwners: string[] = [];

    constructor(budget: number = 50, animalList: Animal[] = []) {
        this.budget = budget;
        this.animalList = animalList;
    }
    rescue(animal: Animal): number {
        this.animalList.push(animal);
        return this.animalList.length;
    }
    getSickAnimals(): Animal[] {
        let sickAnimals: Animal[] = [];
        this.animalList.filter(function (element) {
            if (!element.isHealthy) {
                sickAnimals.push(element);
            }
        }); return sickAnimals;
    }
    getHealthyAnimals(): Animal[] {
        let healthyAnimals: Animal[] = [];
        this.animalList.filter(function (element) {
            if (element.isHealthy) {
                healthyAnimals.push(element);
            }
        }); return healthyAnimals;
    }
    heal(): number {
        let sickAnimals: Animal[] = this.getSickAnimals();
        if (sickAnimals.length == 0) {
            return 0;
        } else if (sickAnimals.length > 0 && this.budget > sickAnimals[0].healCost) {
            sickAnimals[0].isHealthy = true;
            this.budget -= sickAnimals[0].healCost;
            sickAnimals[0].healCost = 0;
        } return 1;
    }

    addAdopter(name: string) {
        this.potentialOwners.push(name);
    }

    findNewOwner():string {
        let animalToChose: Animal;
        let ownerToChose: string = '';
        let animalsToChoseFrom: Animal[] = this.getHealthyAnimals();
        if (animalsToChoseFrom.length > 0 && this.potentialOwners.length > 0) {
            let randomAnimalNumber: number = Math.floor(Math.random() * animalsToChoseFrom.length);
            let randomOwnerNumber: number = Math.floor(Math.random() * this.potentialOwners.length);
            animalToChose = animalsToChoseFrom[randomAnimalNumber];
            ownerToChose = this.potentialOwners[randomOwnerNumber];
            animalToChose.ownerName = ownerToChose;
            this.animalList.splice(this.animalList.indexOf(animalToChose), 1);
            this.potentialOwners.splice(this.potentialOwners.indexOf(ownerToChose), 1);
        } return 'animal is adopted';
    }
    earnDonation(amount: number): number {
        this.budget += amount;
        return this.budget;
    }

    toString(): string {
        let stringsByAnimals: string = '';
        this.animalList.forEach(function (element) {
            stringsByAnimals += '\n' + element.toString();
        })
        return (`Budget: ${this.budget}€, \nThere are ${this.animalList.length} animal(s) and ${this.potentialOwners.length} potential adopter(s)${stringsByAnimals}`)
    }
}

//Testing the functions:
let shelter: Shelter = new Shelter();
shelter.addAdopter('Lucy');
shelter.addAdopter('Becky');
shelter.addAdopter('Joel');
shelter.addAdopter('Finucci');
shelter.addAdopter('Olaf');

shelter.earnDonation(60);

let animal: Animal = new Animal('Jack', true);
let parrot: Parrot = new Parrot('Csőrike', false);
let cat: Cat = new Cat('Kitty', true);
let cat2: Cat = new Cat('Kit', true);
let cat3: Cat = new Cat('Pici', true);
let cat4: Cat = new Cat('Nándor', true);
shelter.rescue(parrot);
shelter.rescue(cat);
shelter.rescue(cat2);
shelter.rescue(cat3);
shelter.rescue(cat4);
// console.log(animal.heal());
// console.log(animal.isAdoptable());
shelter.rescue(animal);
let doggie: Dog = new Dog('Blöki', false)
shelter.rescue(doggie);
// // console.log(doggie.isAdoptable());
// // console.log(doggie.toString());
// shelter.rescue(doggie);
// console.log(shelter);
// // doggie.heal();
// // console.log(doggie.isAdoptable());
// // console.log(doggie.toString());
// // console.log(doggie);
// // console.log(animal);

// console.log(shelter.toString());
// shelter.heal();
// console.log(shelter.toString());
// console.log(shelter.heal());
// console.log(shelter.toString());
// shelter.heal();
// console.log(shelter.heal());
// console.log(shelter.potentialOwners);
console.log(shelter.findNewOwner());
// console.log(shelter.toString());
// console.log(shelter.potentialOwners);