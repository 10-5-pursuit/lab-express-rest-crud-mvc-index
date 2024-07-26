const express = require('express');
const locations = express.Router();
const locationsArr = require('../models/location.model')

locations.get('/', (req, res) => {
    res.status(200).json(locationsArr);
})

module.exports = locations;