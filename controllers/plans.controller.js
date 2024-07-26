const express = require('express');
const plans = express.Router();
const plansArr = require('../models/plan.model');

plans.get('/', (req, res) => {
    res.status(200).json(plansArr);
})

module.exports = plans;