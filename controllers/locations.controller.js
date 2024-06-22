const express = require('express')

// creates the express route
const locations = express.Router()

// obtains the data from the model folder pathway
const locationsArray = require('../models/location.model')

// creates the path for the location array from the model locations 
locations.get('/', ( req, res ) => {
    res.json(locationsArray)

})

locations.get('/:index', (req, res)=> {

    const { index } = req.params

    if(parseInt(index) && parseInt(index) <= locationsArray.length) {
        res.json(locationsArray[index])
    }
})

module.exports = locations