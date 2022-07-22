const express = require('express');
const debug = require('debug')('app:server');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const sequelize = require('./src/db');

//Import routes from src/routes folder
const routes = require('./src/routes/index');

//check database connection
sequelize
  .authenticate()
  .then((res) => debug(colors.blue.inverse('Database is connected')))
  .catch((err) => {
    debug(
      colors.red.inverse('There was an error connecting to the database'),
      err
    );
    process.exit(1); //NODE TERMINATE SERVER
  });

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'src', 'public'))); //public
app.use(express.json());

if ((process.env.MODE = "development")) {
  app.use(morgan("dev"));
}

//routes
app.use('/api', routes);

const PORT = 8080;

const server = app.listen(PORT, () => {
  debug(colors.rainbow(`Server is up and running on PORT: ${PORT}`));
});