require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const creds = require("../middleware/creds");
const connectDB = require('../config/dbConnection');
const PORT = process.env.port || 4500;

connectDB();
app.use(creds);
app.use(cors(corsOptions));
app.use(express.json());

app.use('/toppings', require('../routes/toppings'));
app.use('/pizza', require('../routes/pizza'));

app.all('*', (req, res) => {
    res.status(404);
    res.type('txt').send("404 NOT FOUND");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
