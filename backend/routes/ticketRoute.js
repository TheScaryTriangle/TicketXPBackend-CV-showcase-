const express = require('express');
const router = express.Router();
const { getAllTickets } = require('../controllers/ticketModule')

router.route('/GetAllTickets').get(getAllTickets).post(getAllTickets)

module.exports = router;