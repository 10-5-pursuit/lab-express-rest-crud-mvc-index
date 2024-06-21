const express = require("express");
const specialevents = express.Router();
const specialeventsArray = require("../models/special-event.model");

specialevents.get("/", (req, res) => {
  res.json(specialeventsArray);
});

module.exports = specialevents;
