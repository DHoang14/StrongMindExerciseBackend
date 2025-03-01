const mongoose = require('mongoose');

const disconnectDB = async () => {
    try {
        await mongoose.disconnect(process.env.DATABASE_URI);
        console.log('disconnected to mongoose');
    } catch (err) {
        console.error(err);
    }
}

module.exports = disconnectDB;