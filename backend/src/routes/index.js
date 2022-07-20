const express = require('express');
const debug = require('debug')('app:routes');

const sequelize = require('../db');
const Pet = require('../models/Pet');

const router = express.Router();

const { getAllPets } = require('../controllers/index');

router.get('*/pets', getAllPets);

module.exports = router;