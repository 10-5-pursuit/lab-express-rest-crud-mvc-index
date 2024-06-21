const express = require('express');
const router = express.Router();
const plans = require('../models/plan.model');

router.get('/plans', (req, res) => {
  res.json(plans);
});

module.exports = router;
