'use strict';

//https://index.hu/kultur/zene/2019/07/12/fesztival_nyilvantartas_orszaggyules/

// a szervezőknek rögzíteniük kell 
// a 25 ezer főnél nagyobb, 
// belépőjegy vásárlásához kötött 
// zenei rendezvények résztvevőinek személyes adatait
// - NEVÉT, 
// - ÁLLAMPOLGÁRSÁGÁT, 
// - SZÜLETÉSI IDEJÉT, 
// - NEMÉT, 
// - A SZEMÉLYI OKMÁNYT KIÁLLÍTÓ ÁLLAMOT ÉS 
// - AZ OKMÁNYON SZEREPLŐ ARCKÉPET KELL RÖGZÍTENIÜK. 
// A FESZTIVÁLOZÓK ADATAIT 90 NAPIG TÁROLJÁK, EZT KÖVETŐEN MEG KELL SEMMISÍTENI AZOKAT. 
//AZ INFORMÁCIÓKAT ÍRÁSOS KÉRÉS ALAPJÁN A RENDŐRSÉG, A TERRORELHÁRÍTÁSI KÖZPONT, A NEMZETI ADÓ- ÉS VÁMHIVATAL, AZ ÜGYÉSZSÉG ÉS A BÍRÓSÁG KAPHATJA MEG.

class Festivalozo {
    name: string;
    citizenship: string;
    dateOfBirth: string;
    gender: string;
    IDissueingCountry: string;
    pictureOfID: string;

    constructor(name: string, citizenship: string, dateOfBirth: string, gender: string, IDissueingCountry: string, pictureOfID: string) {
        this.name = name;
        this.citizenship = citizenship;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.IDissueingCountry = IDissueingCountry;
        this.pictureOfID = pictureOfID;
    }
}
function dangerousPerson(Festivalozo: string) {
    if (this.pictureOfID = 'too nice' && this.gender == 'female') {
        console.log('ACHTUNG!!!!!');
    }
}

let bela = new Festivalozo('Béla', 'hungarian', '1980.12.24', 'male', 'Hungary', 'awful');
let eniko = new Festivalozo('Enikő', 'hungarian', '2000.07.23', 'female', 'Hungary', 'beautiful');
let tim = new Festivalozo('Tim', 'dutch', '1995.08.12', 'male', 'The Netherlands', 'professional');

class Festival {
    numberOfVisitors: number = 0;
    theme: string;
    name: string;

    constructor(name: string, theme: string, numberOfVisitors: number, ) {
        this.name = name;
        this.theme = theme;
        this.numberOfVisitors = numberOfVisitors;

    }

}


let sziget = new Festival('sziget', 'music', 30000);

console.log(sziget);
console.log(bela);
console.log(eniko);
console.log(tim);
console.log(dangerousPerson(eniko));


 if (sziget.numberOfVisitors > 25000 && sziget.theme == 'music') {
    return dangerousPerson(Festivalozo);
    prison.push(Festivalozo);



    