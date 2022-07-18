const { Sequelize } = require("sequelize");
const path = require("path");
const debug = require("debug")("app:sequelize");

const sequelize = new Sequelize("sheltor-inventory", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
