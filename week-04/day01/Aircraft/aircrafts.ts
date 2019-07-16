'use strict';

class Aircraft {
    name: string;
    maxAmmo: number;
    baseDamage: number;

    constructor(name: string, maxAmmo: number = 0, baseDamage: number) {
        this.name = name;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
    }
}

let aircraft1 = new Aircraft('Type F16', 0, 30);