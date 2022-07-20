const express = require('express');
const debug = require('debug')('app:server');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const routes = require('./src/routes/index');

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

let yo = 'this is the connection';

app.get('/ayoo', (req, res) => {
    res.send(yo)
});
   