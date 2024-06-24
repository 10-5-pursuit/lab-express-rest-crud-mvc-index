//first import express, then import the router instance finally declare your informations title

const express = require("express");
const machines = express.Router();
const machinesarr = require("../models/machine.model")

machines.get("/",(req,res)=> {
    res.json(machinesarr)
});

module.exports = machines;