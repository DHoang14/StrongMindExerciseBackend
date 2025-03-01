const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    toppings: [{
        type: Schema.Types.ObjectId, ref: 'Topping'
    }]
})

//create new model called Pizza with above schema for the pizzas collection
module.exports = mongoose.model('Pizza', pizzaSchema, 'pizzas');