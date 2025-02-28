const getAllPizzas = async (req, res) => {
    res.status(201).json({'message': 'Pizzas retrieved!'});
}

const addPizza = async (req, res) => {
    res.status(201).json({'message': 'Added new pizza'});
}

const deletePizza = async (req, res) => {
    res.status(201).json({'message': 'Deleted pizza'});
}

const updatePizza = async (req, res) => {
    res.status(201).json({'message': 'Updated pizza'});
}
module.exports = {
    getAllPizzas,
    addPizza,
    deletePizza,
    updatePizza
};