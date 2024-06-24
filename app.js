const express = require('express');
const app = express();
//models
const locations = require("./controllers/locations.controller");
const machines = require('./controllers/machines.controller');
const plans = require('./controllers/plans.controller');
const sEvent = require('./controllers/special-events.controller');
const persons = require ('./controllers/persons.controller')

//this is where the controllers need to be imported after creation

app.use('/locations',locations);
app.use('/machines', machines);
app.use('/plans', plans);
app.use('/sEvents', sEvent);
app.use('persons', persons);

app.get('/', (req,res)=>{
    res.send('Welcome to the App')
}); 





module.exports = app;