const express = require('express')

const specialEvents = express.Router()

const specialEventsArray = require('../models/specialeventModel')

specialEvents.get('/', (req, res)=> {

    res.json(specialEventsArray)
})

module.exports = specialEvents