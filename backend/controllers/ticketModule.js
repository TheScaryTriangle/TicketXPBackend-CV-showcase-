const asyncHandler = require('express-async-handler');
const ticketModel = require('../models/ticketModel');

const getAllEvents = asyncHandler(async (req, res) => {
    const events = await ticketModel.find();
    res.status(200).json(events)
})

const addEvent = asyncHandler(async (req, res) => {
    const request = req.body;
    console.log({ request })
    try {
        const addEventRequest = await ticketModel.create(request);
        console.log(addEventRequest)

        res.status(200).json({
            Vendor: addEventRequest,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error adding the event' });
    }
})

module.exports = {
    getAllEvents,
    addEvent
}