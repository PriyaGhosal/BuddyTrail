const dotenv = require('dotenv');

dotenv.config();

const config = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 5000,
};

module.exports = config;
