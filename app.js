// Dependancies
const express = require('express');
const app = express();

// Controllers
const locationsController = require('./controllers/locationsController');
const machinesController = require('./controllers/machinesController');
const personsController = require('./controllers/personsController');
const plansController = require('./controllers/plansController');
const specialEventsController = require('./controllers/specialEventsController');


app.get('/', (req, res) => {
    res.send('Hello, world!')
});


app.use('/locations', locationsController);
app.use('/machines', machinesController);
app.use('/persons', personsController);
app.use('/plans', plansController);
app.use('/specialEvents', specialEventsController);

app.get('*', (req, res) => {
    res.status(404).json({error: "Sorry, no page found!"})
});


module.exports = app;