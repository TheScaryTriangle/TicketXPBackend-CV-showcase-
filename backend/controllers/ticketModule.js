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

const deleteEvent = asyncHandler(async (req, res) => {
    const eventId = req.body.id; // Assuming the ID is in the URL parameters
    try {
        const deletedEvent = await ticketModel.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            res.status(404).json({ message: 'Event not found' });
        } else {
            res.status(200).json({ message: 'Event deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the event' });
    }
})

module.exports = {
    getAllEvents,
    addEvent,
    deleteEvent
}