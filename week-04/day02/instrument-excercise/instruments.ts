'use strict';

abstract class Instrument {
    nameOfInstrument: string;

    constructor(nameOfInstrument: string) {
        this.nameOfInstrument = nameOfInstrument;
    }
    abstract play(): void;
}

export default Instrument;
