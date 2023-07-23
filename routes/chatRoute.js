const express = require('express');
const chatControl = require('../controllers/chatControl');

const router = express.Router();

router.route('/addMessage').post(chatControl.addMessage);

module.exports = router;