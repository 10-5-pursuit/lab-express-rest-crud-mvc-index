const express = require('express');
const router = express.Router();
const persons = require('../models/person.model');

router.get('/people', (req, res) => {
  res.json(persons);
});

module.exports = router;
