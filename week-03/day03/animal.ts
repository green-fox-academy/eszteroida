'use strict';
// Animal

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class animal {
    hunger: number;
    thirst: number;

    eat(): void {
        this.hunger --;
    }
    drink(): void {
        this.thirst --;
    }
    play(): void {
        this.hunger ++;
        this.thirst ++;
    }
    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
}

let dog = new animal();
console.log(dog);

dog.play();
console.log(dog);
dog.eat();
console.log(dog);
dog.drink();
console.log(dog);
dog.play();
console.log(dog);
dog.play();
console.log(dog);
dog.play();
console.log(dog);
dog.drink();
console.log(dog);
dog.drink();
console.log(dog);
dog.drink();
console.log(dog);
dog.drink();
console.log(dog);
dog.drink();
console.log(dog);