const express = require('express')

const app = express()

// imports 
const specialEventsController = require('./controllers/special-eventsController')
const locationsController = require('./controllers/locationsController')
const machinesController = require('./controllers/machinesController')
const personsController = require('./controllers/personsController')


app.get('/', (req,res) => {
    res.send("Hello World!")
})

// Routing 
app.use('/special-events', specialEventsController)
app.use('/location', locationsController)
app.use('/machine', machinesController)
app.use('/person', personsController)




module.exports = app