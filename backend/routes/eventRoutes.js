const express = require('express');
const router = express.Router();
const { addEvent, getAllEvents, deleteEvent, getEventByID, getAllAvalibleEvents } = require('../controllers/eventModule')

// router.route('/GetAllEvents').get(getAllEvents).post(getAllEvents)
router.route('/AddEvent').get(addEvent).post(addEvent)
router.route('/DeleteEvent').get(deleteEvent).post(deleteEvent).delete(deleteEvent)
router.route('/GetEventById').get(getEventByID).post(getEventByID)
router.route('/GetHomepageEvents').get(getAllAvalibleEvents).post(getAllAvalibleEvents)

module.exports = router;