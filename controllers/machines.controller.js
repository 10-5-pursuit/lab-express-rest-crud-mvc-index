const express = require('express')

const machines = express.Router()

const machineArrays = require('../models/machine.model')

machines.get('/', (req, res)=> {
    res.json(machineArrays)
})

machines.get('/:index', (req, res)=> {
    const { index } = req.params

    if(parseInt(index) && parseInt(index) <= machineArrays.length) {
        res.json(machineArrays[index])
    }


})


module.exports = machines