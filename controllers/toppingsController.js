const getToppings = async (req, res) => {
    res.status(201).json({'message': 'Toppings retrieved!'});
}

module.exports = {
    getToppings
};