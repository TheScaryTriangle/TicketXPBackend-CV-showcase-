const express = require('express');
const router = express.Router();
const { addEvent, getAllEvents, deleteEvent,getEventByID } = require('../controllers/ticketModule')

router.route('/GetAllEvents').get(getAllEvents).post(getAllEvents)
router.route('/AddEvent').get(addEvent).post(addEvent)
router.route('/DeleteEvent').get(deleteEvent).post(deleteEvent).delete(deleteEvent)
router.route('/GetEventById').get(getEventByID).post(getEventByID)

module.exports = router;