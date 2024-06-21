const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");
const peopleArray = require("../models/person.model");

locations.get("/", (req, res) => {
    res.json(locationsArray);
})

locations.get("/people", (req, res) => {
    const locationsCopy = [...locationsArray]
    for (const location of locationsCopy) {
        location.people = peopleArray.filter(person => person.mainLocation === location.zip);
    }
    res.json(locationsCopy);
})

module.exports = locations;