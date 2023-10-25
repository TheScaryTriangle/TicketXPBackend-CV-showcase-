const asyncHanlder = require('express-async-handler');
const vendorTable = require('../models/vendorModel')

/**
 * @dev Used to get all the vendors from the database
 * @param {*} res 
 */
const getVendors = asyncHanlder(async (res) => {
    const vendors = await vendorTable.find();
    res.status(200).json(vendors)
})

const addVendor = asyncHanlder(async (req, res) => {
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

const getVendorById = asyncHanlder(async (req, res) => {
    const vendors = await vendorTable.find();
    res.status(200).json(vendors)
})

const updateVendor = asyncHanlder(async (req, res) => {
    const vendorFromDb = await vendorTable.findById(req.params.id);

    if (!vendorFromDb) {
        res.status(400);
        throw new Error('Vendor not found');
    }

    const updatedVendor = await vendorTable.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedVendor);
})

module.exports = {
    getVendors,
    addVendor,
    getVendorById,
    updateVendor
}