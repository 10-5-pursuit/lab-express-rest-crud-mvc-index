// import express
const express = require('express');
// create an istance of our express router 
const machines = express.Router();
// import the location model 
const machinesData = require('../models/machine.model');
const { checkForPurchasedKey } = require('../validations/machineValidation');


// Index route of all machine data
machines.get('/', (req, res) => {
    res.json(machinesData);
});

// CREATE new car data
// contains middleware
// machines.post('/:car', checkForPurchasedKey, (req, res) => {
//     machinesData.push(req.body);
//     res.json(machinesData);

// });

// UPDATE route using the index from the url 
// Yes, you can remove .status(200) without causing an error. By default, Express will use the status code 200 OK if you don't explicitly set a status code
// machines.put('/:car', (req, res) => {
//     const { car } = req.params;
//     machinesData[car] = req.body;
//     res.status(200).json(machinesData[car]);
// });


// delete route
machines.delete('/:car', (req, res) => {
    const { car } = req.params;
    if (machinesData[car]) {
        machinesData.splice(car, 1);
        res.json({ message: "Successfully brought a car!" });
    } else {
        res.json({ error: "Car Not Found" });
    }
});


//export router
module.exports = machines;
