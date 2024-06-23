const locationsDB = require('../models/location.model');
const express = require('express');
const location = express.Router();

location.get('/', (req, res) => {
    res.json(locationsDB);
});

module.exports = location;