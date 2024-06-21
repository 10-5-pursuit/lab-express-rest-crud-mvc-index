const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
});

module.exports = specialEvents;