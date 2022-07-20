const express = require('express');
const sequelize = require('../db');
const Pet = require('../models/Pet');
//const { check } = require('express-validator');

const router = express.Router();

const { getAllPets } = require('../controllers/index');

//routes
router.get('*/pets', getAllPets);


module.exports = router;