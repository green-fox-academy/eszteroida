'use strict';
let converter = require('./converter');
let test = require("tape");


test('main test - positive', t => {
   let number = 245;
   let words = 'two hundred fourty five'
    t.equals(converter(number), words);
    t.end()
});

