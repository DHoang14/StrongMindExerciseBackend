const getAllToppings = async (req, res) => {
    res.status(201).json({'message': 'Toppings retrieved!'});
}

const addTopping = async (req, res) => {
    res.status(201).json({'message': 'Added new topping'});
}

const deleteTopping = async (req, res) => {
    res.status(201).json({'message': 'Deleted topping'});
}

const updateTopping = async (req, res) => {
    res.status(201).json({'message': 'Updated topping'});
}

module.exports = {
    getAllToppings,
    addTopping,
    deleteTopping,
    updateTopping
};