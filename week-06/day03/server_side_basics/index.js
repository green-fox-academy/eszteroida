const express = require('express');
const app = express();
const PORT = 3001;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });