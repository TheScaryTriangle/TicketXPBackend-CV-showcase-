const asyncHandler = require('express-async-handler');
const vendorTable = require('../models/vendorModel');
const vendorModel = require('../models/vendorModel');

/**
 * @dev Used to get all the vendors from the database
 * @param {*} res 
 */
const getVendors = asyncHandler(async (req, res) => {
    const vendors = await vendorTable.find();
    res.status(200).json(vendors)
})

const addVendor = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add text field');
    }

    const addVendorRequest = await vendorTable.create({
        text: req.body.text,
    });

    res.status(200).json({
        text: addVendorRequest
    })
})

const getVendorById = asyncHandler(async (req, res) => {
    const vendorFromDb = await vendorTable.findById(req.body.id);
    res.status(200).json(vendorFromDb);
})

const updateVendor = asyncHandler(async (req, res) => {
    console.log(req.body.id)
    const vendorFromDb = await vendorTable.findById(req.body.id);
    res.status(200).json(vendorFromDb);

    if (!vendorFromDb) {
        res.status(400);
        throw new Error('Vendor not found');
    }

    const updatedVendor = await vendorTable.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedVendor);
})

const deleteVendor = asyncHandler(async (req, res) => {
    const vendorId = req.body.id; // Assuming the ID is in the URL parameters
    try {
        const deletedVendor = await vendorTable.findByIdAndDelete(vendorId);

        if (!deletedVendor) {
            res.status(404).json({ message: 'Vendor not found' });
        } else {
            res.status(200).json({ message: 'Vendor deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the vendor' });
    }
});


module.exports = {
    getVendors,
    addVendor,
    getVendorById,
    updateVendor,
    deleteVendor
}