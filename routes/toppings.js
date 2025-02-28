const express = require('express');
const router = express.Router();
const toppingsController = require('../controllers/toppingsController');

router.get('/', toppingsController.getToppings);

module.exports = router;