const express = require('express');
const router = express.Router();
const locations = require('../models/location.model');

router.get('/locations', (req, res) => {
  res.json(locations);
});

module.exports = router;
