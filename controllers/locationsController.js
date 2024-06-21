// Dependancies
const express = require('express');
const locations = express.Router();

// Modals
const locationsArray = require('../models/locations');
const personsArray = require('../models/persons');

// Functions

const handleLocationPeople = () => {
    return locationsArray.map((location) => {
        location.people = personsArray.filter((person) => location.zip === person.mainLocation )
        return location
    })
};

locations.get('/', (req, res) => {
    res.json(locationsArray)
});

locations.get('/people', (req, res) => {
    const newModal = handleLocationPeople()
    res.json(newModal)
});

module.exports = locations;