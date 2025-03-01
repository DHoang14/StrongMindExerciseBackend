const connectDB = require('../config/dbConnection');
const disconnectDB = require('../config/dbDisconnection');
const Topping = require('../models/Topping')

const getAllToppings = async (req, res) => {
    await connectDB();
    const toppings = await Topping.find();
    await disconnectDB();
    if (!toppings) return res.status(204).json({'message': 'No toppings found.', 'toppings': []});
    res.json(toppings);
}

const addTopping = async (req, res) => {
    if (!req?.body?.name) {
        return res.status(400).json({'message': 'Topping name is required.'});
    }

    try {
        const duplicate = await Topping.findOne({name: req.body.name}).exec();
        if (duplicate) {
            return res.status(409).json({'message': 'Topping with that name already exists.'});
        }

        const newTopping = new Topping({
            name: req.body.name
        });
        const result = await newTopping.save();
        res.status(201).json(result);
    } catch (err) {
        return res.status(500).json({'message': err.message});
    }
}

const deleteTopping = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({'message': 'Topping id required.'});

    try {
        const topping = await Topping.findOne({_id: req.body.id}).exec();
        if (!topping) {
            return res.status(204).json({'message': 'No topping exists with that id.'});
        }
        const result = await topping.deleteOne();
        res.json(result);
    }
    catch (err) {
        return res.status(500).json({'message': err.message});
    }
    
}

const updateTopping = async (req, res) => {
    if (!req?.body?.id || !req?.body?.name) return res.status(400).json({'message': 'Topping id and name are required.'});

    try {
        const topping = await Topping.findOne({_id: req.body.id}).exec();
        if (!topping) {
            return res.status(204).json({'message': 'No topping exists with that id.'});
        }
        const duplicate = await Topping.findOne({name: req.body.name}).exec();
        if (duplicate) {
            return res.status(409).json({'message': 'Topping with that name already exists.'});
        }
        topping.name = req.body.name;
        const result = await topping.save();
        res.json(result);
    }
    catch (err) {
        return res.status(500).json({'message': err.message});
    }    

}

module.exports = {
    getAllToppings,
    addTopping,
    deleteTopping,
    updateTopping
};