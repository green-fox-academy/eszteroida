'use strict'
import Aircraft from './aircrafts';

class F35 extends Aircraft {
    constructor() {
        super('F35', 12, 50);
    }
}

export default F35;