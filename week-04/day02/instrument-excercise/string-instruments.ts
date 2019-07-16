'use strict';
import Instrument from './instruments';

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    soundOfInstrument: string;
    sound(): string {
        return this.soundOfInstrument;
    }

    constructor(nameOfInstrument: string, numberOfStrings: number, soundOfInstrument: string) {
        super(nameOfInstrument);
        this.numberOfStrings = numberOfStrings;
        this.soundOfInstrument = soundOfInstrument;
    }
    play(): void {
        console.log(`${this.nameOfInstrument} a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOfInstrument}`);
    }
}
export default StringedInstrument;
