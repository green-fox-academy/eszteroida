'use strict';
const express = require('express');
const app = express();
const PORT = 3040;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'aliases'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db' + err);
    return;
  }
  console.log('Connection established');
});

app.use(express.static('./assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/api/links', (req, res) => {
  connection.query('SELECT id, url, alias, hitcount FROM alias_elements', (err, resp) => {
    if (err) {
      res.send(err.toString());
      return
    }
    res.send(resp);
  });
});

app.post('/api/links', (req, res) => {
  const digit = () => Math.floor(Math.random() * 10);
  let secretCode = '';
  for (let i = 0; i < 4; i++) {
    secretCode = secretCode.concat(digit());
  }
  connection.query('INSERT INTO alias_elements (url, alias, secret_code), values (?, ?, ?);', [req.body.url, req.body.alias, secretCode], function (err, rows) {
    if (err) {
      console.log(err.message);
      res.sendStatus(400);
    } else {
      res.send(rows);
      alert(`Your URL is aliased to ${alias} and your secret code is ${secretCode}.`);
    }
  })
});

app.get('/api/a/:alias', (req, res) => {
  const alias = req.params.alias
  connection.query('UPDATE alias_elements SET hitcount + 1 WHERE alias=?;', alias, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.sendStatus(404);
    } else {
      alert('Hitcount incremented');
      console.log(rows);
    }
  });
});

app.delete('/api/links/:id', (req, res) => {
  if (req.params.id) {
    connection.query('SELECT secret_code FROM alias_elements WHERE id=?', [req.params.id], (err, rows) => {
      if (rows[0].secret_code == req.body.secretCode) {
        connection.query('DELETE from alias_elements WHERE id=?', [req.params.id], (err, resp) => {
          res.sendStatus(204);
        });
      } else {
        res.sendStatus(403);
      }
    });
  } else {
    res.sendStatus(404);
  }

});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} 🌸`);
});
