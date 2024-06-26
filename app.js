const express = require('express');
const locationsController = require('./controllers/locations.controller');
const machinesController = require('./controllers/machines.controller');
const personsController = require('./controllers/persons.controller');
const plansController = require('./controllers/plans.controller');
const specialEventsController = require('./controllers/special-events.controller');

const app = express();

app.use('/locations', locationsController);
app.use('/machines', machinesController);
app.use('/persons', personsController);
app.use('/plans', plansController);
app.use('/special-events', specialEventsController);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
})

module.exports = app;