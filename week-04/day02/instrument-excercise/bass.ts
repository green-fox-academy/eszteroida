'use strict';
import StringedInstrument from './string-instruments';

class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('BassGuitar', numberOfStrings, 'Duum-duum-duum')
    }
}

export default BassGuitar;
