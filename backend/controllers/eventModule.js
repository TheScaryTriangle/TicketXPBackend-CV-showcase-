const asyncHandler = require('express-async-handler');
const ticketModel = require('../models/eventModel');
const web3 = require('web3')

/**
 * @dev This gets all of the events from the database
 * @dev Don't use this directly to return all events process this data first
 */
const getAllEventsInternal = asyncHandler(async (req, res) => {
    const events = await ticketModel.find();
    return events
})

const getAllEvents = (async (req, res) => {
    const events = await ticketModel.find();
    res.status(200).json(events)
})

/**
 * @dev This returns just the events that are still avaible to purchase
 */
const getAllAvalibleEvents = asyncHandler(async (req, res) => {
    const events = await getAllEventsInternal(req, res)
    console.log(events)
    const currentDate = new Date();

    // Filter events where EndOfSale date is after or equal to the current date
    const validEvents = events.filter(event => {
        const endOfSaleDate = new Date(event.EndOfSale);
        return endOfSaleDate >= currentDate;
    });

    res.status(200).json(validEvents)
})


const addEvent = asyncHandler(async (req, res) => {
    const request = req.body;
    try {
        const addEventRequest = await ticketModel.create(request);

        res.status(200).json({
            data: addEventRequest,
            message: 'Event added',
            status: 200,
            success: true,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error adding the event',
            status: 500,
            success: falses,
        });
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

const getEventByID = asyncHandler(async (req, res) => {
    try {
        const eventFromDB = await ticketModel.findById(req.body.id);
        res.status(200).json(eventFromDB);
    } catch (error) {
        res.status(500).json({ message: 'Error finding the event' });
    }
})

const getEventByIDInternal = asyncHandler(async (_eventId) => {
    try {
        const eventFromDB = await ticketModel.findById(_eventId);
        return eventFromDB
    } catch (error) {
        return null;
    }
})

module.exports = {
    getAllEvents,
    getAllAvalibleEvents,
    addEvent,
    deleteEvent,
    getEventByID,
    getEventByIDInternal
}