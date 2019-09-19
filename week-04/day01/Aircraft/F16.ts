'use strict'
import Aircraft from './aircrafts';

class F16 extends Aircraft {
    constructor() {
        super('F16', 8, 30);
    }
}

export default F16;