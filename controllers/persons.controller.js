const express = require("express");
const people = express.Router();
const personsArray = require("../models/person.model");

people.get("/", (req, res) => {
  res.json(personsArray);
});

module.exports = people;