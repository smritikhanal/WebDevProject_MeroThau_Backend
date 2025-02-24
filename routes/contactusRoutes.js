const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactusController');

// Routes for Contact Us messages
router.get('/', contactController.getAllMessages);
router.get('/:id', contactController.getMessageById);
router.post('/create', contactController.createMessage);
router.delete('/:id', contactController.deleteMessage);

module.exports = router;
