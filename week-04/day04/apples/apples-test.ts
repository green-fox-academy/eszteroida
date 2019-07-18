'use string';

// import {test} from 'tape';
import Marketitem from './apples';
let test = require('tape');

test('add product to get', t => {
    const product = new Marketitem();

    let actual = 'valami';
    let expected = product.getProduct('valami');
    t.equal(actual, expected);
    t.end();
  });   