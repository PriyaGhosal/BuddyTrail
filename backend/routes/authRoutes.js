const express = require('express');
const { signup, login, logout, verifyToken } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify', verifyToken); // New verification route

module.exports = router;
