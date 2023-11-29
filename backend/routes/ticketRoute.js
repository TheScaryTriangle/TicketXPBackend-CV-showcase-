const express = require('express');
const router = express.Router();
const { getAllTickets, addTicket, getTicketById } = require('../controllers/ticketModule')

router.route('/GetAllTickets').get(getAllTickets).post(getAllTickets)
router.route('/AddTicket').get(addTicket).post(addTicket)
router.route('/GetTicketById').get(getTicketById).post(getTicketById)

module.exports = router;