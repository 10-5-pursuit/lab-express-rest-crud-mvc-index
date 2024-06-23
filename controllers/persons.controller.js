const personsDB = require('../models/person.model');
const express = require('express');
const person = express.Router();

person.get('/', (req, res) => {
    res.json(personsDB);
});

module.exports = person;