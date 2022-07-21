const express = require('express');
const sequelize = require('../db');
const Pet = require('../models/Pet');
//const { check } = require('express-validator');

const router = express.Router();

const { getAllPets, getPetById, deletePetById, createPet, updatePet } = require('../controllers/index');

///routes
router.get('*/pets', getAllPets);
router.get('/pets/:id', getPetById);
router.delete('/pets/:id', deletePetById);
router.post('/pets/create', createPet);
router.put('/pets/update/:id', updatePet);

module.exports = router;