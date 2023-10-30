const asyncHandler = require('express-async-handler');
const vendorModel = require('../models/vendorModel');

/**
 * @dev Used to get all the vendors from the database
 * @param {*} res 
 */
const getVendors = asyncHandler(async (req, res) => {
    const vendors = await vendorModel.find();
    res.status(200).json(vendors)
})

/**
 * @dev This adds a new vendor to the DB
 * @params Takes a object in the body, this is the request object
 * {
 *  VendorName: "",
 *  VendorId: "",
 *  IsActive: true,
 *  VendorDescription: "",
 * }
 * @todo Add the rest of the object see Backend documentation for refrence
 */
const addVendor = asyncHandler(async (req, res) => {
    const { VendorName, VendorID, IsActive, VendorDescription } = req.body;
    
    if (!VendorName || !VendorID) {
        res.status(400);
        throw new Error('Please provide VendorName and VendorID');
    }


    try {
        const addVendorRequest = await vendorModel.create({
            VendorName,
            VendorID,
            VendorDescription,
            IsActive,
        });
        console.log(addVendorRequest)

        res.status(200).json({
            Vendor: addVendorRequest,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error adding the vendor' });
    }
});

/**
 * @dev This is used to get a single vendor from their vendor Id
 * @notice The vendor Id is not the one assigned by the user but the primary key assigned by the DB
 * @param id The Id of the Vendor
 */
const getVendorById = asyncHandler(async (req, res) => {
    const vendorFromDb = await vendorModel.findById(req.body.id);
    res.status(200).json(vendorFromDb);
})

/**
 * @dev This updates an existing vendor
 */
const updateVendor = asyncHandler(async (req, res) => {
    console.log(req.body.id)
    const vendorFromDb = await vendorModel.findById(req.body.id);
    res.status(200).json(vendorFromDb);

    if (!vendorFromDb) {
        res.status(400);
        throw new Error('Vendor not found');
    }

    const updatedVendor = await vendorModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedVendor);
})

const deleteVendor = asyncHandler(async (req, res) => {
    const vendorId = req.body.id; // Assuming the ID is in the URL parameters
    try {
        const deletedVendor = await vendorModel.findByIdAndDelete(vendorId);

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