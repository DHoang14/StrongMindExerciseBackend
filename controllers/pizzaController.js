const Pizza = require('../models/Pizza');
const getAllPizzas = async (req, res) => {
    const pizzas = await Pizza.find().populate('toppings');
    if (!pizzas) return res.status(204).json({'message': 'No pizzas found.', 'pizzas': []});
    res.json(pizzas);
}

const addPizza = async (req, res) => {
    if (!req?.body?.name) {
        return res.status(400).json({'message': 'Pizza name is required.'});
    }

    try {
        const duplicate = await Pizza.findOne({name: req.body.name}).exec();
        if (duplicate) {
            return res.status(409).json({'message': 'Pizza with that name already exists.'});
        }

        const newPizza = new Pizza ({
            name: req.body.name,
            toppings: req.body.toppings? req.body.toppings : []
        });
        const result = await newPizza.save();
        res.status(201).json(result);
    } catch (err) {
        return res.status(500).json({'message': err.message});
    }
}

const deletePizza = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({'message': 'Pizza id required.'});
    
        try {
            const pizza = await Pizza.findOne({_id: req.body.id}).exec();
            if (!pizza) {
                return res.status(204).json({'message': 'No pizza exists with that id.'});
            }
            const result = await pizza.deleteOne();
            res.json(result);
        }
        catch (err) {
            return res.status(500).json({'message': err.message});
        }
}

const updatePizza = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({'message': 'Pizza id is required.'});
    
    try {
        const pizza = await Pizza.findOne({_id: req.body.id}).exec();
        if (!pizza) {
            return res.status(204).json({'message': 'No pizza exists with that id.'});
        }
        if (req.body?.name) {
            const duplicate = await Pizza.findOne({name: req.body.name}).exec();
            if (duplicate) {
                return res.status(409).json({'message': 'Pizza with that name already exists.'});
            }
            pizza.name = req.body.name;
        }
        if (req.body?.toppings) pizza.toppings = req.body.toppings;
        const result = await pizza.save();
        res.json(result);
    }
    catch (err) {
        return res.status(500).json({'message': err.message});
    }    
}

module.exports = {
    getAllPizzas,
    addPizza,
    deletePizza,
    updatePizza
};