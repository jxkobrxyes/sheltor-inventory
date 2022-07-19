const sequelize = require('../db');
const Product = require('../models/Pet');
const debug = require('debug')('app:controllers');
const { validationResult } = require('express-validator');

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