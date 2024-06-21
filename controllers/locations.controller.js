// const express = require("express");
// const locations = express.Router();
// const locationsArray = require("../models/location.model");

// locations.get("/", (req, res) => {
//   res.json(locationsArray);
// });

// module.exports = locations;

const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");
const personsArray = require("../models/person.model");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

// New route to get people organized by location
locations.get("/people", (req, res) => {
  const result = locationsArray.map((location) => {
    // Filter people by location
    const people = personsArray.filter(
      (person) => person.mainLocation === location.zip
    );

    // Add people to the location object
    return { ...location, people: people };
  });

  res.json(result);
});

module.exports = locations;
