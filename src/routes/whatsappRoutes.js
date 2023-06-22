const express = require('express');
const whatsAppController = require('../controllers/whatsappController');

const router = express.Router();

router.get("/", whatsAppController.verifyToken);
router.post("/", whatsAppController.receiveMessage);

module.exports = router;