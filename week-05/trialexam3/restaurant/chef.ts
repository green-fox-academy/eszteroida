'use strict'
import Employee from './employee';

// - It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)

// `cook` behavior
//   - should update the `meals` information so we are able to track that it cooked this specific food again

class Chef extends Employee {
    mealsEverCooked: object = {};

    constructor(name: string, experience?: number) {
        super(name, experience)
    }
    work(): void {
        this.experience++;
    }
    cook(foodName: string): void {
        let keys: string[] = Object.keys(this.mealsEverCooked);
        if (keys.indexOf(foodName) >= 0) {
            this.mealsEverCooked[foodName] += 1;
        } else {
            this.mealsEverCooked[foodName] = 1;
        }
    }
}

let krisztian: Chef = new Chef('Krisztián', 5);
console.log(krisztian);
krisztian.work();
krisztian.cook('főzelék');
krisztian.cook('főzelék');
console.log(krisztian);
console.log(Object.keys(krisztian.mealsEverCooked));
export default Chef;