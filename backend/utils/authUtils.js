const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Import bcrypt
const config = require('../config/config'); // Import config

exports.createToken = (userId) => {
    return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: '1h' }); // Use config for jwtSecret
};

exports.verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret); // Use config for jwtSecret
};

// New utility function to hash a password
exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// New utility function to compare a password with a hashed password
exports.comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// New utility function to add a cookie
exports.addCookie = (res, name, value, options = {}) => {
    res.cookie(name, value, { httpOnly: true, ...options });
};

// New utility function to delete a cookie
exports.deleteCookie = (res, name) => {
    res.clearCookie(name);
};
