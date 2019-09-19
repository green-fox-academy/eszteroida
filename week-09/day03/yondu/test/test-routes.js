'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

// Write a test where you check:

// With giving a parameter the status is ok,
// and the given response is the same as expected

test('yondu endpoint status 200', (t) => {
  request(app)
    .get('/yondu')
    .send({ distance: 100, time: 10 })
    .end((err, res) => {
      if (err) throw err;
      t.equal(res.status, 200);
      t.same(res.body, {
        distance: 100,
        time: 10,
        speed: 10
      });
      t.end();
    })
});

// That without giving a parameter the status is not ok,
// and the given error response is the same as expected

test('yondu endpoint status not ok', (t) => {
  // TODO: implement it
});