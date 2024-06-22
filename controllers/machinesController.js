const express = require('express')

const machines = express.Router()

const machineArrays = require('../models/machineModel')

machines.get('/', (req, res)=> {
    res.json(machineArrays)
})


module.exports = machines