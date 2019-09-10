'use strict'
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3003;

app.use(express.static('static'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db' + err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/titles', (req, res) => {
  let bookTitles = 'SELECT book_name FROM book_mast';
  connection.query(bookTitles, (err, rows) => {
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});