// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const peopleController = require("./controllers/persons.controller");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Locations Route
app.use("/locations", locationsController);

// Locations Route
app.use("/people", peopleController);

// 404 PAGE 
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;