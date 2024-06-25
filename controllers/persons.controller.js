const express = require("express");
const persons = express.Router();
const personsArr = require('../models/person.model');


persons.get('/', (req, res)=>{
    res.json(personsArr)
})

module.exports = persons;