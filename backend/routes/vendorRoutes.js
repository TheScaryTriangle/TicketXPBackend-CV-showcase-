const express = require('express');
const router = express.Router();
const { getVendors,addVendor,getVendorById } = require('../controllers/vendorModule')

router.route('/GetAllVendors').get(getVendors).post(getVendors)
router.route('/AddVendor').get(addVendor).post(addVendor)
router.route('/GetVendor').get(getVendorById).post(getVendorById)


module.exports = router;