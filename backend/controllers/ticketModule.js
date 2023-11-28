const asyncHandler = require('express-async-handler');
const ticketModel = require('../models/ticketModel');
const web3 = require('web3')

/**
 * @dev This gets all of the events from the database
 * @dev Don't use this directly to return all events process this data first
 */
const getAllTickets = asyncHandler(async (req, res) => {
    const tickets = await ticketModel.find();
    return tickets
})

const addTicket = asyncHandler(async (req, res) => {
    const requestData = req.body;
    console.log(requestData)
    res.status(200).json(requestData)

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
 * @dev This returns just the events that are still avaible to purchase
 */
const getAllAvalibleEvents = asyncHandler(async (req, res) => {
    const events = await getAllEvents(req,res)
    console.log(events)
    const currentDate = new Date(); 

    // Filter events where EndOfSale date is after or equal to the current date
    const validEvents = events.filter(event => {
      const endOfSaleDate = new Date(event.EndOfSale);
      return endOfSaleDate >= currentDate;
    });
  
    res.status(200).json(validEvents)
})

module.exports = {
    getAllTickets,
    addTicket,
}