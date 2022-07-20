const sequelize = require('../db');
const Pet = require('../models/Pet');
const debug = require('debug')('app:controllers');

/**
 * @desc Gets all products
 * @route GET /api/products
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
          .json({ products, success: true, message: 'All pets returned' });
      }
    } catch (error) {
      debug(error);
      res
        .status(400)
        .json({ success: false, message: ` - Error: ${error.message}` });
    }
  };