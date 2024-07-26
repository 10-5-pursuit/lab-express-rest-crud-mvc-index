const express = require('express');
const persons = express.Router();
const personsArr = require('../models/person.model')

persons.get('/', (req, res) => {
    res.status(200).json(personsArr);
})

module.exports = persons;