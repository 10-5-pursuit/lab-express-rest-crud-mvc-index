// import express
const express = require('express');
// create an istance of our express router 
const machines = express.Router();
// import the location model 
const machinesData = require('../models/machine.model');


// create route that at goes to the corrct data file
machines.get('/', (req, res)=>{
    res.json(machinesData);
    });

//export router
module.exports = machines;
