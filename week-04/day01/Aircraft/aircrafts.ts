'use strict';

class Aircraft {
    maxAmmo: number;
    baseDamage: number;
    currentAmmo: number;
    type: string;

    constructor(type: string, maxAmmo: number, baseDamage: number) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.currentAmmo = 0;

    }
    fight(): number {
        let damageDealt: number = this.baseDamage * this.currentAmmo;
        this.currentAmmo = 0;
        return damageDealt;
    }

    refill(refillamount: number): number {
        let neededAmmo: number = this.maxAmmo - this.currentAmmo;
        let remainingAmmo: number = 0;
        if (refillamount > neededAmmo) {
            this.currentAmmo = this.maxAmmo;
            remainingAmmo -= neededAmmo;
        } else {
            this.currentAmmo -= refillamount;
            remainingAmmo = 0;
        }
        return remainingAmmo;
    }
    getType(): string {
        return this.type;
    }
    getStatus(): string {
        return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`;
    }

    isPriority(): boolean {
        return this.type === 'F35';
    }
}


export default Aircraft;
