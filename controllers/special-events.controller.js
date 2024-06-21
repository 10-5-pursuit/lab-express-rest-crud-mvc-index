const express = require('express');
const router = express.Router();
const specialEvents = require('../models/special-event.model');

router.get('/special-events', (req, res) => {
  res.json(specialEvents);
});

module.exports = router;
