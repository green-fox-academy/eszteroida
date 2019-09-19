'use strict'
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3003;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

app.use(express.json());
app.use(express.static('views'));
app.set('view engine', 'ejs');

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db' + err);
    return;
  }
  console.log('Connection established');
});

app.get('/titles', (req, res) => {
  let bookTitles = 'SELECT book_name FROM book_mast';
  connection.query(bookTitles, (err, rows) => {
    res.send(rows);
  });
});

app.get('books', (req, res)=> {
  
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});