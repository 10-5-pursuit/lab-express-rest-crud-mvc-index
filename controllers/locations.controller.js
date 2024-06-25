const express = require ('express');

const locations = express.Router();

const locationsarr = require ("../models/location.model");

locations.get('/',(req,res)=> {
    res.json(locationsarr)

});

module.exports = locations;