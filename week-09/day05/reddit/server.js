'use strict';

const express = require('express');
const app = express();
const PORT = 3040;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
  });

app.use(express.static('./assets'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});

module.exports = app;