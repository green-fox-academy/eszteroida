'use strict'

class Animal {
    ownerName: string;
    isHealthy: boolean;
    healCost: number;
    name: string;
    constructor(name: string, ownerName: string, isHealthy: boolean, healCost: number) {
        this.name = name;
        this.ownerName = ownerName;
        this.isHealthy = isHealthy;
        this.healCost = healCost;
    }

    heal(): void {
        this.isHealthy = true;
    }

    isAdoptable(): boolean {
        return this.isHealthy;
    }

    toString(): string {
        if (!this.isHealthy) {
            return `${this.name} is not healthy, heal cost is ${this.healCost}€, and not adoptable.`;
        } else {
            return `${this.name} is healthy, and adoptable.`;
        }
    }
}

export default Animal;