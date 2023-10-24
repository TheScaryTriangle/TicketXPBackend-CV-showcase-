const asyncHanlder = require('express-async-handler');

/**
 * @dev Used to get all the vendors from the database
 * @param {*} req 
 * @param {*} res 
 */
const getVendors = asyncHanlder(async (req, res) => {
    if (req.body.text) {
        res.status(400);
        throw new Error('Please remove the text field');
    }

    res.status(200).json({
        vendorName: "Clapham Apollo",
        vendorId: "1",
    })
})

module.exports = {
    getVendors
}