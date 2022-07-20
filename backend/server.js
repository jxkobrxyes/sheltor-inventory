const express = require('express');
const cors = require('cors');
const debug = require('debug')('app:server');
const colors = require('colors');
const path = require('path');
const app = express();
const sequelize = require('./src/db');
const { Sequelize } = require("sequelize");

//Import routes from src/routes folder
//const routes = require('./src/routes/index');

//check database connection
// sequelize
//   .authenticate()
//   .then((res) => debug(colors.blue.inverse('Database is connected')))
//   .catch((err) => {
//     debug(
//       colors.red.inverse('There was an error connecting to the database'),
//       err
//     );
//     process.exit(1); //NODE TERMINATE SERVER
//   });


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'public'))); //public

const port = 8080;

//app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

let yo = 'this is the connection';

app.get('/ayoo', (req, res) => {
    res.send(yo)
});