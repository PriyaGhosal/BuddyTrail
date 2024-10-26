const mongoose = require('mongoose');
const config = require('./config'); // Import config

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, { // Use config for mongoURI
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;