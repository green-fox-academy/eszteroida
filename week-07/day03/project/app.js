const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let output = {};
  if (isNaN(Number(req.query.input))) {
    output = {
      error: 'Please provide an input!'
    };
  } else {
    output = {
      received: req.query.input,
      result: req.query.input * 2
    };
  }
  res.send(output);
});

app.get('/greeter', (req, res) => {
  let message = {};
  if (req.query.name !== undefined && req.query.title !== undefined) {
    message = {
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    };
  } else if (req.query.name === undefined && req.query.title !== undefined) {
    message = {
      error: "Please provide a name!"
    };
  } else if (req.query.title === undefined && req.query.name !== undefined) {
    message = {
      error: "Please provide a title!"
    };
  } else {
    message = {
      error: "Please provide a name and a title!"
    };
  }
  res.send(message);
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable !== undefined) {
    res.send ({
      appended: req.params.appendable + 'a'
    });
  } else {
    res.status(404)
  }
})




app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

