// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const peopleController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const machinesController = require("./controllers/machines.controller");
const specialEventsController = require("./controllers/special-events.controller");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Locations Route
app.use("/locations", locationsController);

// People Route
app.use("/persons", peopleController);

// Plans Route
app.use("/plans", plansController);

// Machines Route
app.use("/machines", machinesController);

// Special Events Route
app.use("/special-events", specialEventsController);

// 404 PAGE 
app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

// EXPORT
module.exports = app;