const express = require('express')

// creates the express route
const locations = express.Router()

// obtains the data from the model folder pathway
const locationsArray = require('../models/locationModel')

// creates the path for the location array from the model locations 
locations.get('/', ( req, res ) => {
    res.json(locationsArray)

})

module.exports = locations