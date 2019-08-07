const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {title: 'Guest' });
});

app.get('/greet', (req, res) => {
  
    res.render('home', { title: req.query.name || 'Guest' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});