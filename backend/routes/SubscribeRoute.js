const express = require('express');
const { subscribe } = require('../controllers/subscribeController.js');


const router = express.Router();

router.post('/', subscribe);

module.exports = router;
