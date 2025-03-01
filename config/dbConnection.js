const { MongoClient } = require('mongodb');

const connectDB = async () => {
    const mongoClient = new MongoClient(process.env.DATABASE_URI)
    try {
        const client = await mongoClient.connect();
        console.log('connected to mongoose');
        return client.db('seExercise');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;