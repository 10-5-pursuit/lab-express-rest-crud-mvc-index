const express = require('express');
const app = express();
const locationsController = require('./controllers/locations.controller');
const machinesController = require('./controllers/machines.controller');
const plansController = require('./controllers/plans.controller');
const personsController = require('./controllers/persons.controller');
const specialEventsController = require('./controllers/special-events.controller');

app.get('/', (req, res) => {
    res.send('Welcome to my Main App!');
});

app.use('/locations', locationsController);
app.use('/machines', machinesController);
app.use('/plans', plansController);
app.use('/persons', personsController);
app.use('/special-events', specialEventsController);

module.exports = app;