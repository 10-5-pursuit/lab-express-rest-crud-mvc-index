// const express = require("express");
// const locations = express.Router();
// const locationsArray = require("../models/location.model");

// locations.get("/", (req, res) => {
//   res.json(locationsArray);
// });


// locations.get('/locations/people', (req, res) => {
//   const locationsWithPeople = locations.map(location => {
//     return {
//       ...location,
//       people: persons.filter(person => person.mainLocation === location.zip)
//     };
//   });
//   res.json(locationsWithPeople);
// });

// module.exports = locations;


const express = require('express');
const router = express.Router();
const locations = require('../models/location.model');
const persons = require('../models/person.model');

// Route to get all locations
router.get('/', (req, res) => {
  res.json(locations);
});

// Route to get people organized by location
router.get('/people', (req, res) => {
  const locationsWithPeople = locations.map(location => {
    const peopleAtLocation = persons.filter(person => person.mainLocation === location.zip);
    return {
      ...location,
      people: peopleAtLocation
    };
  });
  res.json(locationsWithPeople);
});

module.exports = router;
