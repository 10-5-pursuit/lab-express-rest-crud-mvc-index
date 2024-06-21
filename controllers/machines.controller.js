const express = require('express');
const router = express.Router();
const machines = require('../models/machine.model');

router.get('/equipment', (req, res) => {
  res.json(machines);
});

module.exports = router;
