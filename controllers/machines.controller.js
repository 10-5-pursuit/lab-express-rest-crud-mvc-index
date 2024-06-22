const express = require('express')

const machines = express.Router()

const machineArrays = require('../models/machine.model')

machines.get('/', (req, res)=> {
    res.json(machineArrays)
})


module.exports = machines