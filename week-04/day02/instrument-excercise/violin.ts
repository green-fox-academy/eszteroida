'use strict';
import StringedInstrument from './string-instruments'

class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Violin', numberOfStrings, 'Screech');
    }
}

export default Violin;
