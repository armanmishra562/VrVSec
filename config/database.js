const mongoose = require('mongoose');
const logger = require('../utils/logger');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info('MongoDB Connected');
    } catch (err) {
        logger.error('MongoDB connection failed:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
