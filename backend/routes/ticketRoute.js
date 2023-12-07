const express = require('express');
const router = express.Router();
const { getAllTickets, getTicketById, buyTicket, getUsersTickets, deleteTicket } = require('../controllers/ticketModule')

router.route('/GetAllTickets').get(getAllTickets).post(getAllTickets)
router.route('/GetTicketById').get(getTicketById).post(getTicketById)
router.route('/BuyTicket').get(buyTicket).post(buyTicket)
router.route('/GetUserTickets').get(getUsersTickets).post(getUsersTickets)
router.route('/DeleteTicket').get(deleteTicket).post(deleteTicket)

module.exports = router;