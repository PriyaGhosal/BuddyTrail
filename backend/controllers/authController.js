const User = require('../models/User');
const { hashPassword, comparePassword, createToken, addCookie, deleteCookie, verifyToken } = require('../utils/authUtils');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        const token = createToken(newUser._id); // Create token after user creation
        addCookie(res, 'token', token); // Add cookie with the token
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await comparePassword(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = createToken(user._id);
    addCookie(res, 'token', token); // Add cookie with the token
    res.status(200).json({ message: 'Login successful' });
};

// Logout function to clear the cookie
exports.logout = (req, res) => {
    deleteCookie(res, 'token'); // Clear the token cookie
    res.status(200).json({ message: 'Logout successful' });
};

// Verify function to check the token and return user ID
exports.verifyToken = (req, res) => {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = verifyToken(token); // Verify the token
        res.status(200).json({ userId: decoded.id }); // Return user ID
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
