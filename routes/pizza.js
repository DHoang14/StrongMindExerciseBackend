const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

router.route('/')
    // .get(pizzaController.getAllPizzas)
    // .post(pizzaController.addPizza)
    // .delete(pizzaController.deletePizza)
    // .put(pizzaController.updatePizza);

module.exports = router;