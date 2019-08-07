const express = require('express');
const app = express();
const PORT = 3001;

const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {title: 'Todo list', todo: todos});
}); 

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });