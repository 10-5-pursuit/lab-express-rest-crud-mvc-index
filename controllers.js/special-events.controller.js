const express = require('express');
const specialEvents = express.Router();
const specialEventsData = require('../models/person.model');

specialEvents.get('/', (req, res)=>{
res.json(specialEventsData);
});


module.exports = specialEvents;