const getPizzas = async (req, res) => {
    res.status(201).json({'message': 'Pizzas retrieved!'});
}

module.exports = {
    getPizzas
};