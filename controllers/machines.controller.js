const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.json(machinesArray);
});

module.exports = machines;
