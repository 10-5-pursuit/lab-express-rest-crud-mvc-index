const express = require('express');
const specialEvents = express.Router();
const specialEventsArr = require('../models/special-event.model');

specialEvents.get('/', (req, res) => {
    res.status(200).json(specialEventsArr);
})

module.exports = specialEvents;