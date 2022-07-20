const sequelize = require('../db');
const Pet = require('../models/Pet');
const debug = require('debug')('app:controllers');
//const { validationResult } = require('express-validator');

/**
 * @desc Gets all pets
 * @route GET /api/pets
 * @access Public
 */
 exports.getAllPets = async (req, res) => {
    try {
      const pets = await Pet.findAll();
  
      if (!pets) {
        res.status(400).json({
          success: false,
          message: 'No pets found',
        });
      } else {
        res
          .status(200)
          .json({ pets, success: true, message: 'All pets returned' });
      }
    } catch (error) {
      debug(error);
      res
        .status(400)
        .json({ success: false, message: ` - Error: ${error.message}` });
    }
  };

/**
 * @desc Get single product by id
 * @route GET api/pets/:id
 * @access Public
 */
 exports.getPetById = async (req, res) => {
    const petId = req.params.id;
  
    try {
      const pet = await Pet.findByPk(petId);
  
      if (!pet) {
        res.status(400).json({
          success: false,
          message: 'Pet not found - check the product ID',
        });
      } else {
        res.status(200).json({
          pet,
          success: true,
          message: 'Pet returned successfully',
        });
      }
    } catch (error) {
      debug(error);
      res.status(400).json({
        success: false,
        message: `Pet not found - Error: ${error.message}`,
      });
    }
  };