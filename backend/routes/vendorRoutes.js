const express = require('express');
const router = express.Router();
const { getVendors, addVendor, getVendorById, updateVendor } = require('../controllers/vendorModule')

router.route('/GetAllVendors').get(getVendors).post(getVendors)
router.route('/AddVendor').get(addVendor).post(addVendor)
router.route('/GetVendor').get(getVendorById).post(getVendorById)
router.route('/UpdateVendor').get(updateVendor).post(updateVendor)

module.exports = router;