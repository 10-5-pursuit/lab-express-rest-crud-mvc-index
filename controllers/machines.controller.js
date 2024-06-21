const machinesDB = require('../models/machine.model');
const express = require('express');
const machine = express.Router();

machine.get('/', (req, res) => {
    res.json(machinesDB);
});

module.exports = machine;