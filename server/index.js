const express = require('express');
const app = express();

const db = require('../database-mysql/config.js');

const car = require('../database-mysql/routers/car.js');


app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.use('/api/cars', car)



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

