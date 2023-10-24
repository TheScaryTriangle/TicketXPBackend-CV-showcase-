const express = require('express');
const router = express.Router();
const { getVendors } = require('../controllers/vendorModule')

router.route('/').get(getVendors).post(getVendors)

module.exports = router;