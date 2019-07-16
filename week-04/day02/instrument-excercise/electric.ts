'use strict';
import StringedInstrument from './string-instruments';

class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6) {
        super('Electric Guitar', numberOfStrings, 'Twang');
    }
}

export default ElectricGuitar;
