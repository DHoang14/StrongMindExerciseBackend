const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toppingSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

//create new model called Topping with above schema for the toppings collection
module.exports = mongoose.model('Topping', toppingSchema, 'toppings');