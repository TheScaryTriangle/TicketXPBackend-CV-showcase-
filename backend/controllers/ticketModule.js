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

const getTicketById = asyncHandler(async (req, res) => {
    const tickets = await ticketModel.findById(req.body.id);
    res.status(200).json(tickets);
})

const getTicketByIdInternal = asyncHandler(async (id) => {
    const tickets = await ticketModel.findById(id);
    return tickets;
})

const buyTicket = asyncHandler(async (req, res) => {
    try {
        const ticketObject = {
            ...req.body,
            IsValid: true,
            IsActive: true,
        }

        const addTicketRequest = await ticketModel.create(
            ticketObject
        );

        res.status(200).json({
            addTicketRequest,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error adding the Ticket' });
    }
})

const getUsersTickets = asyncHandler(async (req, res) => {
    try {
        console.log(req.body)
        const userData = await ticketModel.find({ 'UserId': new RegExp(req.body.UserId, 'i') }).exec();
        res.status(200).json(userData);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error finding the user' });
    }
})

const deleteTicket = asyncHandler(async (req, res) => {
    try {
        const ticketId = req.body.ticketId
        console.log(ticketId)
        const userData = await ticketModel.findByIdAndDelete(ticketId);
        res.status(200).json(userData);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error finding the user' });
    }
})



module.exports = {
    getAllTickets,
    getTicketById,
    getTicketByIdInternal,
    buyTicket,
    getUsersTickets,
    deleteTicket
}