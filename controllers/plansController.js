// Dependancies
const express = require('express');
const plans = express.Router();

// Modals
const plansArray = require('../models/plans')

plans.get('/', (req, res) => {
    res.json(plansArray)
});


module.exports = plans;