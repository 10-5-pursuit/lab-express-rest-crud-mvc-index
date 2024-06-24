const express = require("express");
const locationsData = require('./controllers.js/locations.controller');
const machinesData = require('./controllers.js/machines.controller');
const personsData = require('./controllers.js/persons.controller');
const plansData = require('./controllers.js/plans.controller');
const specialEventsData = require('./controllers.js/special-events.controller');


const app = express();

//MIDDLEWARE
app.use(express.json());
app.use('/locations',locationsData);

app.use('/machines', machinesData);
app.use('/persons', personsData);
app.use('/plans', plansData);
app.use('/special-events', specialEventsData);


app.get("/",(req,res)=>{
    res.send('Hey how are you!');
});


app.get("*",(req,res)=>{
    res.status(404).json({error: "Page Not Found"});
});

module.exports = app;

// console.log(process.env)

// req.params
// req.query
// req.body