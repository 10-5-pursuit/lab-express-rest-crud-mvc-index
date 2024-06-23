const plansDB = require('../models/plan.model');
const express = require('express');
const plan = express.Router();

plan.get('/', (req, res) => {
    res.json(plansDB);
});

module.exports = plan;