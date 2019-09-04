'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');

// Write a test where you check:

// - With giving a parameter the status is ok
// - and the given response is the same as expected

test('groot endpoint param status 200', (t) => {
  request(app)
    .get('/groot?message=something')
    .end((err, res) => {
      if (err) throw err;
      t.equal(res.status, 200);
      t.same(res.body, {
        received: "something",
        translated: "I am Groot!"
      });
      t.end();
    })
});

// - Without giving a parameter the status is not ok,
// - and the given error response is the same as expected

test('groot endpoint param status 400', (t) => {
  request(app)
    .get('/groot')
    .end((err, res) => {
      if (err) throw err;
      t.equal(res.status, 400);
      t.same(res.body, { error: "I am Groot!" });
      t.end();
    })
});

