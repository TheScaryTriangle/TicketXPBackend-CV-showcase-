const asyncHandler = require('express-async-handler');
const ticketModel = require('../models/ticketModel');
const web3 = require('web3')

/**
 * @dev This gets all of the events from the database
 * @dev Don't use this directly to return all events process this data first
 */
const getAllTickets = asyncHandler(async (req, res) => {
    const tickets = await ticketModel.find();
    // return tickets
    res.status(200).json(tickets);
})


const addTicket = asyncHandler(async (req, res) => {
    const requestData = req.body;
    console.log(requestData)

    try {
        const addTicketRequest = await ticketModel.create(
            requestData
        );
        console.log(addTicketRequest)

        res.status(200).json({
            Ticket: addTicketRequest,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error adding the Ticket' });
    }
});

const getTicketById = asyncHandler(async (req, res) => {
    const tickets = await ticketModel.findById(req.body.id);
    // return tickets
    res.status(200).json(tickets);
})

const getTicketByIdInternal = asyncHandler(async (id) => {
    const tickets = await ticketModel.findById(id);
    return tickets;
})

module.exports = {
    getAllTickets,
    addTicket,
    getTicketById,
    getTicketByIdInternal
}