const express = require('express');
const router = express.Router();
const { getVendors, addVendor, getVendorById, updateVendor, deleteVendor } = require('../controllers/vendorModule')

router.route('/GetAllVendors').get(getVendors).post(getVendors)
router.route('/AddVendor').get(addVendor).post(addVendor)
router.route('/GetVendorById').get(getVendorById).post(getVendorById)
router.route('/UpdateVendor').get(updateVendor).post(updateVendor)
router.route('/DeleteVendor').get(deleteVendor).post(deleteVendor).delete(deleteVendor)

module.exports = router;