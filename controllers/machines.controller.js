const express = require('express');
const machines = express.Router();
const machinesArr = require('../models/machine.model');

machines.get('/', (req, res) => {
    res.status(200).json(machinesArr);
})

module.exports = machines;