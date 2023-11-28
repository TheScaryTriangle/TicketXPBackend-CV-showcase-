const express = require('express');
const router = express.Router();
const { generateQR, scanQR } = require('../controllers/qrModule')

router.route('/GenerateQRCode').get(generateQR).post(generateQR)
router.route('/ValidateQRCode').get(scanQR).post(scanQR)

module.exports = router;