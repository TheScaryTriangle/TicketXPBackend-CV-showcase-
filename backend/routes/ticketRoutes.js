const express = require('express');
const router = express.Router();
const { addEvent, getAllEvents } = require('../controllers/ticketModule')

router.route('/GetAllEvents').get(getAllEvents).post(getAllEvents)
router.route('/AddEvent').get(addEvent).post(addEvent)

module.exports = router;