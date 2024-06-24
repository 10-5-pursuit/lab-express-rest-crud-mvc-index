const express = require('express')

const people = require('../models/person.model')

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

// helper function
const searchForMatchingPersonByZip = ( zip ) => {
    
    locations.forEach(place => {
        people.filter(zipcode => {
            
        })
    })

}

// Route created to find the list of people by zip code.
locations.get('/people',(req, res) => {
    const { zip } = req.params

    console.log(searchForMatchingPerson(zip));

})

module.exports = locations