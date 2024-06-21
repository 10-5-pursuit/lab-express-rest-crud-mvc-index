// Dependancies
const express = require('express');
const machines = express.Router();

// Modals
const machinesArray = require('../models/machines')

machines.get('/', (req, res) => {
    res.json(machinesArray)
});


module.exports = machines;