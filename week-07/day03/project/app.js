const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  res.send(double());
});
// It should be able to handle a query parameter called input, eg. http://localhost:8080/doubling?input=15
// This endpoint should respond with a json object with the doubled amount of the input:
// {
//   "received": 15,
//   "result": 30
// }
// If no input is provided it should return:
// {
//   "error": "Please provide an input!"
// }
// Check your application in the browser and click on the Try doubling endpoint button.

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

function double(input) {
  input *= 2;
}