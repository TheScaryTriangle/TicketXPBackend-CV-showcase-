const asyncHandler = require('express-async-handler');
const ticketModel = require('../models/ticketModel');

const addEvent = asyncHandler(async (req, res) => {
    const vendors = await vendorModel.find();
    res.status(200).json(vendors)
})

module.exports = {

}