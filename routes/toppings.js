const express = require('express');
const router = express.Router();
const toppingsController = require('../controllers/toppingsController');

router.route('/')
    .get(toppingsController.getAllToppings)
    .post(toppingsController.addTopping)
    .delete(toppingsController.deleteTopping)
    .put(toppingsController.updateTopping);
module.exports = router;