const express = require("express");
const sEvent = express.Router();
const eventsArr = require('../models/special-event.model')

sEvent.get('/', (req,res)=>{
    res.json(eventsArr)
});

module.exports = sEvent