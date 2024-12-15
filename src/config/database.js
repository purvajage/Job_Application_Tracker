const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // Use the Atlas connection string from .env
        console.log('MongoDB Atlas Connected');
    } catch (error) {
        console.error('MongoDB Atlas connection failed:', error.message);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;
