const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Pet = sequelize.define('pet', {
    name: Sequelize.STRING,
    ageYears: Sequelize.DECIMAL,
    gender: Sequelize.STRING,
    image: Sequelize.STRING,
    description: Sequelize.TEXT('long'),
    status: Sequelize.STRING,
    fee: Sequelize.INTEGER,
});

module.exports = Pet;