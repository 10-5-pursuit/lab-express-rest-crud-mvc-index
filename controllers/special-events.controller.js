const specialEventsDB = require('../models/special-event.model');
const express = require('express');
const specialEvent = express.Router();

specialEvent.get('/', (req, res) => {
    res.json(specialEventsDB);
});

module.exports = specialEvent;