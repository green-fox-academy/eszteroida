const express = require('express');
const app = express();

// It should receives a query parameter: message=somemessage
// And responds with a json object with a translated text like below:
// {
//   "received": "somemessage",
//   "translated": "I am Groot!"
// }
// If no input is provided:
// {
//   "error": "I am Groot!"
// }

app.get('/groot', (req, res) => {
  if (req.query.message) {
    res.json({
      received: "somemessage",
      translated: "I am Groot!"
    });
  } else {
    res.status(400);
    res.json({error: "I am Groot!"});
  }
});
    module.exports = app;
