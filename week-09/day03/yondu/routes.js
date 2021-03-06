const express = require('express');
const app = express();
// That receives a query parameter: "distance=100.0&time=10.0"
// (Speed = Distance / Time)
// And responds with the calculated speed of the arrow:
// {
//   "distance": 100.0,
//   "time": 10.0,
//   "speed": 10.0
// }
// Try time with zero! Look what happens!

app.get('/yondu', (req, res) => {
  const distance = req.query.distance;
  const time = req.query.time;
  res.send({
    distance: 100,
    time: 10,
    speed : distance/time
  })
});

module.exports = app;
